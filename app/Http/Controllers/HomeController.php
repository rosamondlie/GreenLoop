<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return response()->json([
            'user' => [
                'name' => 'Rayya Al Ghazali',
                'notifications' => 3
            ],
            'pickup_status' => [
                'scheduled' => false,
                'message' => 'No Scheduled Pick Up Today!'
            ],
            'points' => [
                'balance' => 103,
                'expiry' => '2026-07-13'
            ],
            'vouchers' => [
                [
                    'name' => 'Kopi Kenangan',
                    'image' => '/images/kopi-kenangan.jpg',
                    'reward' => 'Free Coffee',
                    'points_required' => 0
                ],
                // Add more items here
            ],
            'news' => [
                ['title' => 'Waste Management Update'],
                ['title' => 'Eco Campaign Launched']
            ]
        ]);
    }
}
