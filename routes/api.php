<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PickupController; 
use App\Http\Controllers\VoucherController;

// Public routes
Route::apiResource('posts', PostController::class);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::put('/edit-profile', [AuthController::class, 'updateProfile'])->middleware('auth:sanctum');
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

 
// Protected routes for authenticated users
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) { // Standard Sanctum route to get user
        return $request->user();
});

    Route::get('/pickups', [PickupController::class, 'index']);
    Route::post('/pickups', [PickupController::class, 'store']);
    
    // *** NEW ROUTE FOR COMPLETING A PICKUP (for Couriers) ***
    // Using POST, but PUT or PATCH could also be appropriate
    // {pickup} uses route model binding to inject the Pickup model instance
    Route::post('/pickups/{pickup}/start', [PickupController::class, 'startPickup'])->middleware('auth:sanctum');
    Route::post('/pickups/{pickup}/complete', [PickupController::class, 'completePickup']);
    
    Route::middleware('auth:sanctum')->group(function() {
        Route::get('/user/points', [UserController::class, 'getPoints']);
        Route::post('/voucher/redeem', [VoucherController::class, 'redeem']);
    });
    
});