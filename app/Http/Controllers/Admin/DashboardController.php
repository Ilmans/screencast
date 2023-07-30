<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Invoice;
use App\Models\Serie;
use App\Models\Subscription;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //

    public function index()
    {
        $data = [
            'total_users' => User::count(),
            'total_series' => Serie::count(),
            'total_articles' => Article::count(),
            'invoice_paid' => Invoice::whereNotNull('paid_at')->count(),
            'invoice_unpaid' => Invoice::whereNull('paid_at')->count(),
            'total_subscription' => Subscription::whereIsActive(true)->count(),

        ];
        return inertia('Admin/Dashboard', compact('data'));
    }

    
}
