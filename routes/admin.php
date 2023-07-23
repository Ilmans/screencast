<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\SeriesController;
use App\Http\Controllers\Admin\TopicController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\VideoController;
use Illuminate\Support\Facades\Route;

Route::prefix('/admin')->middleware('auth','admin')->group(function (){

    Route::get('/dashboard',[DashboardController::class,'index'])->name('admin.dashboard');

    //topic routes
    Route::get('/topics',[TopicController::class,'index'])->name('admin.topics.index');
    Route::get('/topics/create',[TopicController::class,'create'])->name('admin.topics.create');
    Route::post('/topics',[TopicController::class,'store'])->name('admin.topics.store');
    Route::get('/topics/{topic}/edit',[TopicController::class,'edit'])->name('admin.topics.edit');
    Route::post('/topics/{topic}',[TopicController::class,'update'])->name('admin.topics.update');
    Route::delete('/topics/{topic}',[TopicController::class,'destroy'])->name('admin.topics.destroy');
    // end topic routes

    //series routes
    Route::get('/series',[SeriesController::class,'index'])->name('admin.series.index');
    Route::get('/series/create',[SeriesController::class,'create'])->name('admin.series.create');
    Route::post('/series',[SeriesController::class,'store'])->name('admin.series.store');
    Route::post('/serie/{serie}/status/toggle',[SeriesController::class,'toggleStatus'])->name('admin.series.toggle-status');
    Route::delete('/series/{serie}',[SeriesController::class,'destroy'])->name('admin.series.destroy');

    
    Route::get('/series/{serie}/manage/videos',[SeriesController::class,'manageSerieVideos'])->name('admin.series.videos');
    Route::post('/videos',[VideoController::class,'store'])->name('admin.videos.store');
    Route::put('/video/{video}',[VideoController::class,'update'])->name('admin.video.update');
    Route::delete('/videos/{video}',[VideoController::class,'destroy'])->name('admin.video.destroy');
    Route::post('/swap/videos',[VideoController::class,'swapVideos'])->name('admin.videos.swap');
    //end series routes


    // users routes
    Route::get('/users',[UserController::class,'index'])->name('admin.users.index');
    Route::put('/users/{user}',[UserController::class,'update'])->name('admin.user.update');
    Route::delete('/users/{user}',[UserController::class,'destroy'])->name('admin.user.destroy');
    // end users routes
});
?>