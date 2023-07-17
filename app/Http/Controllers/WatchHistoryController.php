<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WatchHistoryController extends Controller
{

    public function __invoke(Request $request)
    {

        $watchHistories = $request->user()->watchHistories()->with('video', function ($q) {
            $q->select('id', 'title', 'order_num', 'serie_id')->with('serie', function ($q) {
                $q->select('id', 'title', 'slug');
            });
        })->latest()->paginate(12);
        return inertia('WatchHistory/Index', compact('watchHistories'));
    }
}
