<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SerieController;
use App\Http\Controllers\TopicController;
use App\Models\Serie;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $series = Serie::with('topics')->paginate(12);

    return Inertia::render('Home', compact('series'));
})->name('home');

Route::get("/topics", [TopicController::class, "index"])->name("topics");
Route::get("/topic/{topic:slug}", [TopicController::class, 'show'])->name("topic.show");

Route::get("/serie/{serie:slug}", [SerieController::class, "show"])->name("serie.show");
Route::get("/serie/{serie:slug}/{video:order_num}", [SerieController::class, "watch"])->name("serie.watch");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
