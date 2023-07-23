<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Services\ManageSubscriptionService;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    private ManageSubscriptionService $manageSubscriptionService;

    public function __construct(ManageSubscriptionService $manageSubscriptionService)
    {
        $this->manageSubscriptionService = $manageSubscriptionService;
    }

    public function index()
    {
        $subscriptions = $this->manageSubscriptionService->search()->filter()->sort()->getAllSubscriptions();
        return inertia('Admin/Subscription/Index', compact('subscriptions'));
    }
}
