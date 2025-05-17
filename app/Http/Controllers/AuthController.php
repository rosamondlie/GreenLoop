<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
class AuthController extends Controller
{
    public function register(Request $request){
        $fields = $request->validate([
            'username' => 'required|max:255',
            'email'=> 'required|email|unique:users',
            'password'=> 'required|confirmed',
            'address' => 'required'
        ]);

        $user = User::create($fields);

        $token = $user->createToken($request->username);

        return [
            'user'=>$user,
            'token'=>$token->plainTextToken
        ];
    }

    public function login(Request $request){
        $request->validate([
            'email'=> 'required|email|exists:users',
            'password'=> 'required'
        ]);

        $user = User::where('email',$request->email)->first();
        if(!$user || !Hash::check($request->password, $user->password)){
            return [
                'errors' => [
                    'email' => ['The provided credentials are incorrect.']
                ]
            ];
        }

        $token = $user->createToken($user->username);

        return [
            'user'=>$user,
            'token'=>$token->plainTextToken
        ];
    }

    public function logout(Request $request){
        $request->user()->tokens()->delete();
        return [
                'message' => 'You are logged out'
            ];
    }
}
