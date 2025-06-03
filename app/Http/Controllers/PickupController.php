<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pickup;
use App\Models\User; // <-- Add this to query Users for couriers
use Illuminate\Support\Facades\DB; // <-- Add for potential database transactions
use Carbon\Carbon; // For date/time manipulation if needed

class PickupController extends Controller
{
    // Define available time slots (start times)
    // For now, hardcoded. Later, this could come from a config file or database.
    // Assuming pickup_time from the request will be one of these exact start times.
    private function getAvailableSlots(): array
    {
        // Example: '09:00' means the slot 09:00-10:30
        return ['09:00:00', '10:30:00', '12:00:00', '13:30:00', '15:30:00'];
    }

    public function index(Request $request)
    {
        $user = $request->user();

        if ($user->role === 'courier') {
            // Courier View: Show pickups ASSIGNED to them.
            // Frontend will filter by status for "Scheduled/Upcoming", "Ongoing", "History" tabs.
            return Pickup::where('courier_id', $user->id)
                         ->orderBy('pickup_time', 'desc')
                         ->paginate(15);
        } else {
            // Regular User View: Show their own scheduled pickups
            return Pickup::where('user_id', $user->id)
                         ->orderBy('pickup_time', 'desc')
                         ->paginate(15);
        }
    }

    public function store(Request $request)
    {
        if ($request->user()->role === 'courier') {
            return response()->json(['message' => 'Couriers cannot schedule pickups.'], 403);
        }

        $availableSlots = $this->getAvailableSlots();

        $validatedData = $request->validate([
            'category' => 'required|string|max:255',
            'weight' => 'required|numeric|min:0',
            // 'pickup_time' now represents the chosen slot's start time (e.g., "2025-06-01 09:00:00")
            // The frontend will need to send a full datetime string for the selected slot's start.
            'pickup_time' => [
                'required',
                'date_format:Y-m-d H:i:s', // Expecting full datetime for the slot start
                function ($attribute, $value, $fail) use ($availableSlots) {
                    $timePart = Carbon::parse($value)->format('H:i:s');
                    if (!in_array($timePart, $availableSlots)) {
                        $fail('The selected ' . $attribute . ' is not a valid time slot.');
                    }
                    // Ensure date is not in the past
                    if (Carbon::parse($value)->isPast()) {
                        $fail('The selected ' . $attribute . ' cannot be in the past.');
                    }
                },
            ],
        ]);
        
        $requestedPickupTime = $validatedData['pickup_time'];

        // Find an available courier for the requested time slot
        // A courier is available if they do not have another pickup assigned AT THE SAME TIME
        $availableCourier = User::where('role', 'courier')
            ->whereDoesntHave('pickups', function ($query) use ($requestedPickupTime) {
                $query->where('pickup_time', $requestedPickupTime)
                      ->whereIn('status', ['scheduled', 'ongoing']); // Check against existing scheduled/ongoing in that slot
            })
            // Add more fairness logic here later if needed (e.g., orderBy least busy, round-robin)
            ->inRandomOrder() // Simple fairness: pick a random available courier
            ->first();

        if (!$availableCourier) {
            return response()->json(['message' => 'Schedule full for the selected time slot. Please try another time.'], 422); // 422 Unprocessable Entity
        }

        // Use a transaction to ensure atomicity if multiple operations were needed
        // For this simple case, it might be optional but good practice
        try {
            $pickup = Pickup::create([
                'user_id' => $request->user()->id,
                'category' => $validatedData['category'],
                'weight' => $validatedData['weight'],
                'pickup_time' => $requestedPickupTime,
                'status' => 'scheduled', // New pickups are always 'scheduled'
                'courier_id' => $availableCourier->id, // Assign the found courier
            ]);
        } catch (\Exception $e) {
 
        }
        

        return response()->json(['message' => 'Pickup scheduled successfully and assigned to a courier.', 'pickup' => $pickup], 201);
    }

    /**
     * Mark a pickup as completed by the courier.
     */
    // In app/Http/Controllers/PickupController.php
    public function startPickup(Request $request, Pickup $pickup)
{
    $courier = $request->user();

    if ($courier->role !== 'courier') {
        return response()->json(['message' => 'Unauthorized. Only couriers can start pickups.'], 403);
    }

    if ($pickup->courier_id !== $courier->id) {
        return response()->json(['message' => 'This pickup is not assigned to you.'], 403);
    }

    if ($pickup->status !== 'scheduled') {
        return response()->json(['message' => 'This pickup cannot be started. Current status: ' . $pickup->status], 422);
    }

    $pickup->status = 'ongoing';
    $pickup->save();

    return response()->json([
        'message' => 'Pickup marked as ongoing.',
        'pickup' => $pickup->load('user')
    ]);
}

    public function completePickup(Request $request, Pickup $pickup)
    {
        $courier = $request->user();

        if ($courier->role !== 'courier') {
            return response()->json(['message' => 'Unauthorized. Only couriers can complete pickups.'], 403);
        }

        if ($pickup->courier_id !== $courier->id) {
            return response()->json(['message' => 'This pickup is not assigned to you.'], 403);
        }

        if (!in_array($pickup->status, ['scheduled', 'ongoing'])) {
            return response()->json(['message' => 'This pickup cannot be completed from its current status: ' . $pickup->status], 422);
        }

        $pickup->status = 'completed'; // ***** THIS IS THE FIX *****
        $pickup->save();
        $user = $pickup->user; // make sure there's a relationship 'user' in Pickup model

            if ($user) {
                $pointsEarned = intval($pickup->weight); // e.g., 2.3 kg = 2 points
                $user->points = ($user->points ?? 0) + $pointsEarned;
                $user->save();
            }

            return response()->json([
                'message' => 'Pickup marked as completed!',
                'pickup' => $pickup->load('user'),
                'points_earned' => $pointsEarned ?? 0,
                'user_total_points' => $user->points ?? null
            ]);

        // Return the updated pickup, potentially with the user relationship loaded
        return response()->json(['message' => 'Pickup marked as completed!', 'pickup' => $pickup->load('user')]);
    }
}