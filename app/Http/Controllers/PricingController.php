<?php

namespace App\Http\Controllers;

use App\Models\PackagePrice;
use Illuminate\Http\Request;

class PricingController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $prices = PackagePrice::all();
        return inertia('Pricing', compact('prices'));
    }
}
