<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\SeriesController;
use App\Http\Controllers\Admin\TopicController;
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

    
    Route::get('/series/{serie}/manage/videos',[SeriesController::class,'manageSerieVideos'])->name('admin.series.videos');
    Route::post('/videos',[VideoController::class,'store'])->name('admin.videos.store');
    Route::put('/video/{video}',[VideoController::class,'update'])->name('admin.video.update');
    //end series routes
});
?>