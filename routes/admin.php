<?php

use Illuminate\Support\Facades\Route;

Route::prefix('/admin')->middleware('auth','admin')->group(function (){

    Route::get('/dashboard',function (){
        return 'ok';
    });
});
?>