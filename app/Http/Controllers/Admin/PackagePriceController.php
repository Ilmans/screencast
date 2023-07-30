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

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            'duration_months' => 'required|numeric|min:1|max:12',
            'description' => 'required',
        ]);

        PackagePrice::create($request->all());
        return redirect()->back()->with('success','Package price created successfully');
    }
}
