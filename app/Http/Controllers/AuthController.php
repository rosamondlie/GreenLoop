<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
class AuthController extends Controller
{
    public function register(Request $request){
        $fields = $request->validate([
            'username' => 'required|max:255',
            'birth_date' => 'required|date',
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
                    'password' => ['Wrong password.']
                ]
            ];
        }

        $token = $user->createToken($user->username);

        return [
            'user'=>$user,
            'token'=>$token->plainTextToken
        ];
    }

    public function updateProfile(Request $request)
    {
        $user = $request->user();

        $fields = $request->validate([
            'username' => 'required|max:255'. $user->id,
            'birth_date' => 'required|date',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'address' => 'required',
            'profile_picture' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('profile_picture')) {
            if ($user->profile_picture && Storage::disk('public')->exists($user->profile_picture)) {
            Storage::disk('public')->delete($user->profile_picture);
        }
            $path = $request->file('profile_picture')->store('profile_pictures', 'public');
            $fields['profile_picture'] = $path;
        }

        $user->update($fields);

        return response()->json([
            'message' => 'Profile updated successfully.',
            'user' => $user,
        ]);
    }

    public function logout(Request $request){
        $request->user()->tokens()->delete();
        return [
                'message' => 'You are logged out'
            ];
    }
}
