<?php

namespace App\Http\Controllers;

use App\Models\Serie;
use Illuminate\Http\Request;

class WatchLaterController extends Controller
{
    //

    public function index(Request $request): \Inertia\Response
    {
        $series = $request->user()->watchLaters()->with('serie', function ($q) {
            $q->select('id', 'title', 'slug')->with('videos', function ($q) {
                $q->select('id', 'serie_id', 'order_num')->orderBy('order_num', 'asc');
            });
        })->paginate(9);
        return inertia('WatchLater/Index', compact('series'));
    }


    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        try {
            $serie = Serie::find($request->serie_id);
            $request->user()->watchLaters()->create(['serie_id' => $serie->id,]);
            return back()->with('success', 'Serie added to watch later');
        } catch (\Throwable $th) {
            throw $th;
            return back()->with('error', 'Something went wrong');
        }
    }
}
