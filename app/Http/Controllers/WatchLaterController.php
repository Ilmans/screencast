<?php

namespace App\Http\Controllers;

use App\Models\Serie;
use Illuminate\Http\Request;

class WatchLaterController extends Controller
{
    //

    public function store(Request $request)
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
