<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Services\UploadImageService;
use App\Models\PaymentMethod;
use Illuminate\Http\Request;

class PaymentMethodController extends Controller
{

    private $uploadImageService;

    public function __construct(UploadImageService $uploadImageService)
    {
        $this->uploadImageService = $uploadImageService;
    }
    
    public function index ()
    {
        $paymentMethods = PaymentMethod::all();
        return inertia('Admin/PaymentMethod/Index',compact('paymentMethods'));
    }

    public function store (Request $request)
    {
        $request->validate([
            'logo' => 'required|image',
            'bank_name' => 'required|string',
            'account_number' => 'required|string',
            'account_name' => 'required|string',
        ]);

        $name = time();
        $logo = $this->uploadImageService->uploadImage($name,$request->file('logo'),'images/payment-methods');
        PaymentMethod::create([
            'logo' => $logo,
            'bank_name' => $request->bank_name,
            'account_number' => $request->account_number,
            'account_name' => $request->account_name,
        ]);

        return redirect()->back()->with('success','Payment method created successfully');
    }
}
