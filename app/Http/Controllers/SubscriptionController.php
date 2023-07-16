<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

class SubscriptionController extends Controller
{


    public function show(Request $request)
    {
        $subscription = $request->user()->subscription;
        return inertia('Subscription/Show', compact('subscription'));
    }
}
