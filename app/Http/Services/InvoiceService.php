<?php

namespace App\Http\Services;

use App\Models\PackagePrice;
use App\Models\User;

class InvoiceService
{


    private User $user;

    public function setUser(User $user)
    {
        $this->user = $user;
    }

    public function checkIsExistsUnpaidInvoice(): bool
    {
        return $this->user->invoices()->where('paid_at', null)->exists();
    }

    /**
     * create random invoice number
     */
    public function generateInvoiceNumber()
    {
        return "INV-" . rand(100000, 999999);
    }

    /**
     * Create a new invoice.
     */

    public function createInvoice(PackagePrice $packagePrice): void
    {
        $this->user->invoices()->create([
            'user_id' => $this->user->id,
            'invoice_number' => $this->generateInvoiceNumber(),
            'package_price_id' => $packagePrice->id,
            'total' => $packagePrice->price + rand(100, 999),

        ]);
    }
}
