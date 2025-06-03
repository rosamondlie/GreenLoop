<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model; // Ensure HasFactory is not needed unless you have factories for Pickup
// use Illuminate\Database\Eloquent\Factories\HasFactory; // Uncomment if you create a PickupFactory

class Pickup extends Model
{
    // use HasFactory; // Uncomment if you create a PickupFactory

    protected $fillable = [
        'user_id',
        'category',
        'weight',
        'pickup_time',
        'status',
        'courier_id', // <-- ADD THIS LINE
    ];

    /**
     * Get the user that scheduled the pickup.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get the courier assigned to the pickup.
     */
    public function courier()
    {
        return $this->belongsTo(User::class, 'courier_id');
    }
}