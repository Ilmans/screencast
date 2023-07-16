<?php

namespace App\Http\Controllers;

use App\Http\Services\InvoiceService;
use App\Models\PackagePrice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InvoiceController extends Controller
{

    private $invoiceService;
    public function __construct(InvoiceService $invoiceService)
    {
        $this->invoiceService = $invoiceService;
    }

    public function store(Request $request)
    {
        try {
            $this->invoiceService->setUser(Auth::user());
            if ($this->invoiceService->checkIsExistsUnpaidInvoice()) {
                return back()->with('error', 'Anda masih memiliki tagihan yang belum dibayar');
            }
            $selectedPlan = PackagePrice::find($request->plan);
            $this->invoiceService->createInvoice($selectedPlan);
            return redirect('/dashboard');
        } catch (\Throwable $th) {
            throw $th;
            return back()->with('error', 'Something went wrong');
        }
    }
}
