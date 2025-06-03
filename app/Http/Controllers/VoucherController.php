<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class VoucherController extends Controller
{
    
    public function redeem(Request $request)
    {
        $request->validate([
            'voucher_key' => 'required|string',
            'pointsRequired' => 'required|integer|min:0',
        ]);

        $user = $request->user();

        if (!$user) {
            return response()->json(['success' => false, 'message' => 'User not authenticated.'], 401);
        }

        if ($user->points < $request->pointsRequired) {
            return response()->json(['success' => false, 'message' => 'Insufficient points.'], 403);

        } else {
            $user->points -= $request->pointsRequired;
            $user->save();

            return response()->json(['success' => true, 'message' => 'Voucher redeemed successfully.']);
        }
    }
}