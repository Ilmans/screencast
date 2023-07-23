<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Services\ManageInvoiceService;
use App\Models\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    
    private $manageInvoiceService;
    public function __construct(ManageInvoiceService $manageInvoiceService)
    {
        $this->manageInvoiceService = $manageInvoiceService;
    }


    public function index (Request $request)
    {
        $invoices = $this->manageInvoiceService->sort()->search()->filter()->getAllInvoices();
        return inertia('Admin/Invoice/Index',compact('invoices'));
    }

    public function toggleStatus(Request $request,Invoice $invoice)
    {
        $status = $invoice->status == 'paid' ? 'unpaid' : 'paid';
        $invoice->update(['status' => $status]);
        return redirect()->back();
    }

    public function destroy(Invoice $invoice)
    {
        $invoice->delete();
        return redirect()->back()->with('success','Invoice deleted successfully');
    }

}
