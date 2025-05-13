<?php

use Illuminate\Support\Facades\Route;

// All React routes go here
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');