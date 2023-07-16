<?php

namespace App\Http\Controllers;

use App\Http\Services\InvoiceService;
use App\Models\Invoice;
use App\Models\PackagePrice;
use App\Models\PaymentMethod;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class InvoiceController extends Controller
{

    private $invoiceService;
    public function __construct(InvoiceService $invoiceService)
    {
        $this->invoiceService = $invoiceService;
    }

    public function index(Request $request): \Inertia\Response
    {
        $this->invoiceService->setUser(Auth::user());
        $invoices = $this->invoiceService->getInvoices();
        return inertia('Invoice/Index', compact('invoices'));
    }

    /**
     * Show the Invoice Detail.
     */

    public function show(Invoice $invoice): \Inertia\Response
    {
        $this->authorize('view', $invoice);
        $invoice->load('packagePrice');
        $paymentMethods = Cache::rememberForever('paymentMethods', fn () => PaymentMethod::all());
        return inertia('Invoice/Show', compact('invoice', 'paymentMethods'));
    }


    /**
     * Store a new invoice.
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
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
