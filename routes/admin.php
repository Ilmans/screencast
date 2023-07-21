<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\TopicController;
use Illuminate\Support\Facades\Route;

Route::prefix('/admin')->middleware('auth','admin')->group(function (){

    Route::get('/dashboard',[DashboardController::class,'index'])->name('admin.dashboard');

    Route::get('/topics',[TopicController::class,'index'])->name('admin.topics.index');
    Route::get('/topics/create',[TopicController::class,'create'])->name('admin.topics.create');
    Route::post('/topics',[TopicController::class,'store'])->name('admin.topics.store');
    Route::get('/topics/{topic}/edit',[TopicController::class,'edit'])->name('admin.topics.edit');
    Route::post('/topics/{topic}',[TopicController::class,'update'])->name('admin.topics.update');
    Route::delete('/topics/{topic}',[TopicController::class,'destroy'])->name('admin.topics.destroy');
});
?>