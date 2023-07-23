<?php
namespace App\Http\Services;

use App\Models\Invoice;
use Illuminate\Database\Eloquent\Builder;

class ManageInvoiceService
{
    private Builder $invoice;
    public function __construct()
    {
        $this->invoice = Invoice::query();
    }

    public function getAllInvoices()
    {
        return $this->invoice
            ->with('user')
            ->with('packagePrice')
            ->paginate(10)->withQueryString();
    }

    public function search()
    {
        $request = request();
        $request->whenFilled('search', function ($searchTerm) {
            $this->invoice
                ->whereHas('user', function ($query) use ($searchTerm) {
                    $query->where('email', 'like', "%{$searchTerm}%");
                })
                ->orWhere('invoice_number', 'like', "%{$searchTerm}%");
                
        });
        return $this;
    }

    public function filter()
    {
        $request = request();
        $request->whenFilled('status', function ($filter) {
            $this->invoice->where('status', $filter);
        });

        $request->whenFilled('package', function ($filter) {
            $this->invoice->whereHas('packagePrice', function ($query) use (
                $filter
            ) {
                $query->where('name', $filter);
            });
        });
        return $this;
    }

    public function sort()
    {
        $request = request();
        if ($request->sort) {
            switch ($request->sort) {
                case 'newest':
                    $this->invoice->latest();
                    break;
                case 'oldest':
                    $this->invoice->oldest();
                    break;

                default:
                    $this->invoice->latest();
                    break;
            }
        }
        return $this;
    }
}

?>
