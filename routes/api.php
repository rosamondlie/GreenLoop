<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/pickups', [App\Http\Controllers\PickupController::class, 'store']);
});

// Test route
Route::get('/test', function () {
    return response()->json(['message' => 'API is working!']);
});