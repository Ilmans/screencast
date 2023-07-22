<?php

namespace App\Http\Controllers;

use App\Models\Serie;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //

    public function index()
    {
        $series = Serie::with('topics')->whereStatus("published")->withCount('videos')
            ->withSum('videos', 'seconds_time')
            ->take(6)->get();

        return inertia('Home', compact('series'));
    }
}
