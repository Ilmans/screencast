<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SerieController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PricingController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\WatchHistoryController;
use App\Http\Controllers\WatchLaterController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name("home");
//topic



Route::get("/topics", [TopicController::class, "index"])->name("topics");
Route::get("/topic/{topic:slug}", [TopicController::class, 'show'])->name("topic.show");

// serie
Route::get("/serie/{serie:slug}", [SerieController::class, "show"])->name("serie.show");
Route::get("/serie/{serie:slug}/watch/{video:order_num?}", [SerieController::class, "watch"])->name("serie.watch");


// article
Route::get("/articles", [ArticleController::class, "index"])->name("articles");
Route::get("/article/create", [ArticleController::class, "create"])->name("article.create")->middleware('auth');
Route::get("/article/{article:slug}", [ArticleController::class, "show"])->name("article.show");
Route::get("/article/{article:slug}/edit", [ArticleController::class, "edit"])->name("article.edit")->middleware('auth');
Route::post("/article/{article:slug}", [ArticleController::class, "update"])->name("article.update")->middleware('auth');
Route::delete("/article/{article:slug}", [ArticleController::class, "destroy"])->name("article.destroy")->middleware('auth');

// pricing
Route::get('/pricing', PricingController::class)->name('pricing');


/// default laravel :
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/profile/password', [ProfileController::class, 'password'])->name('profile.password');
    Route::put('/profile/password', [ProfileController::class, 'updatePassword'])->name('password.update');

    Route::get("/my_articles", [ArticleController::class, "myArticles"])->name("my_articles");
    Route::post("/article", [ArticleController::class, "store"])->name("article.store");

    Route::get('/subscription', [SubscriptionController::class, 'show'])->name('subscription');
    Route::get('/invoices', [InvoiceController::class, 'index'])->name('invoices');
    Route::post('/invoice', [InvoiceController::class, 'store'])->name('invoice.store');
    Route::get('/invoice/{invoice:id}', [InvoiceController::class, 'show'])->name('invoice.show');
    Route::delete('/invoice/{invoice:id}', [InvoiceController::class, 'destroy'])->name('invoice.destroy');

    Route::post('/save-watch-progress', [VideoController::class, 'saveWatchProgress'])->name('save-watch-progress');
    Route::get('/watch_histories', WatchHistoryController::class)->name('watch_histories');

    Route::get('/watch_later', [WatchLaterController::class, 'index'])->name('watch_later');
    Route::post('/watch_later', [WatchLaterController::class, 'store'])->name('watch_later.store');
    Route::delete('/watch_later/{watchLater:id}', [WatchLaterController::class, 'destroy'])->name('watch_later.destroy');
});



require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
Route::get('/{page:slug}',[PageController::class,'show'])->name('page.show');
