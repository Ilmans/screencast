<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PackagePrice;
use Illuminate\Http\Request;

class PackagePriceController extends Controller
{
    

    public function index ()
    {
        $packagePrices = PackagePrice::all();
        return inertia('Admin/PackagePrice/Index',compact('packagePrices'));
    }
}
