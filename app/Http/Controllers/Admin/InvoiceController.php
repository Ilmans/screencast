<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Services\ManageInvoiceService;
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

}
