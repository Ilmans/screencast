<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

class SubscriptionController extends Controller
{


    public function show(Request $request)
    {
        $subscription = $request->user()->subscription()->with(['packagePrice' => function ($q) {
            $q->select('id', 'name');
        }])->first();

        
        return inertia('Subscription/Show', compact('subscription'));
    }



}
