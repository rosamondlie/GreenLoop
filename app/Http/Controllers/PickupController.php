<?php

namespace App\Http\Controllers;

use App\Models\Pickup;
use Illuminate\Http\Request;

class PickupController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'address' => 'required|string|max:255',
            'materials' => 'required|array',
            'materials.*' => 'string',
            'weight' => 'required|in:Small,Medium,Large'
        ]);

        // Create pickup (you'll need to setup authentication later)
        $pickup = Pickup::create([
            'address' => $validated['address'],
            'materials' => json_encode($validated['materials']),
            'weight' => $validated['weight'],
            'user_id' => 1 // Temporary - replace with auth()->id() later
        ]);

        return response()->json([
            'message' => 'Pickup scheduled successfully!',
            'pickup' => $pickup
        ], 201);
    }
}