<?php

use App\Http\Controllers\Admin\ArticleController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\InvoiceController;
use App\Http\Controllers\Admin\PackagePriceController;
use App\Http\Controllers\Admin\PaymentMethodController;
use App\Http\Controllers\Admin\SeriesController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\SubscriptionController;
use App\Http\Controllers\Admin\TopicController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\VideoController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::prefix('/admin')->middleware('auth','admin','demo')->group(function (){

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

    // articles routes
        Route::get('/articles',[ArticleController::class,'index'])->name('admin.articles.index');
        Route::post('/articles/{article}',[ArticleController::class,'publish'])->name('article.publish');
        Route::post('/articles/unpublish/{article}',[ArticleController::class,'unpublish'])->name('article.unpublish');
    // end articles routes


    // users routes
    Route::get('/users',[UserController::class,'index'])->name('admin.users.index');
    Route::put('/users/{user}',[UserController::class,'update'])->name('admin.user.update');
    Route::delete('/users/{user}',[UserController::class,'destroy'])->name('admin.user.destroy');
    // end users routes

    //invoice routes
    Route::get('/invoices',[InvoiceController::class,'index'])->name('admin.invoices.index');
    Route::post('/invoices/{invoice}/toggle/status',[InvoiceController::class,'toggleStatus'])->name('admin.invoices.toggle-status');
    Route::delete('/invoices/{invoice}',[InvoiceController::class,'destroy'])->name('admin.invoice.destroy');
    // end invoice routes

    // subscription routes
    Route::get('/subscriptions',[SubscriptionController::class,'index'])->name('admin.subscriptions.index');
    Route::post('/subscriptions',[SubscriptionController::class,'store'])->name('admin.subscription.store');
    Route::put('/subscriptions/{subscription}',[SubscriptionController::class,'update'])->name('admin.subscription.update');
    Route::delete('/subscriptions/{subscription}',[SubscriptionController::class,'destroy'])->name('admin.subscription.destroy');
    // end subscription routesd

    //payment method routes
    Route::get('/payment_methods',[PaymentMethodController::class,'index'])->name('admin.payment_methods.index');
    Route::post('/payment_methods',[PaymentMethodController::class,'store'])->name('admin.payment_methods.store');
    Route::delete('/payment_methods/{paymentMethod}',[PaymentMethodController::class,'destroy'])->name('admin.payment_methods.delete');
    // end payment method routes

    Route::get('/package-prices',[PackagePriceController::class,'index'])->name('admin.package_prices.index');
    Route::post('/package-prices',[PackagePriceController::class,'store'])->name('admin.package_prices.store');
    Route::delete('/package-prices/{packagePrice}',[PackagePriceController::class,'destroy'])->name('admin.package_prices.destroy');

    // page route
    Route::get('/pages',[PageController::class,'index'])->name('admin.pages.index');
    Route::post('/pages',[PageController::class,'store'])->name('admin.pages.store');
    Route::delete('/pages/{page}',[PageController::class,'destroy'])->name('admin.pages.destroy');
    //end page route

    // website setting route
    Route::get('/settings',[SettingsController::class,'index'])->name('admin.settings.index');
    Route::post('/settings',[SettingsController::class,'set'])->name('admin.settings.set');
});
?>