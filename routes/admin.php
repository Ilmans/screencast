<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\TopicController;
use Illuminate\Support\Facades\Route;

Route::prefix('/admin')->middleware('auth','admin')->group(function (){

    Route::get('/dashboard',[DashboardController::class,'index'])->name('admin.dashboard');

    Route::get('/topics',[TopicController::class,'index'])->name('admin.topics.index');
});
?>