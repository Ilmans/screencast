<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Services\ManageSubscriptionService;
use App\Models\Subscription;
use Carbon\Carbon;
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

    public function update(Request $request,Subscription $subscription)
    {
        // validation , if status true and expired is < now() then return message validation, or if status false and expired is > now() then return message validation
        $request->validate([
            'status' => 'required|boolean',
            'expired' => 'required|date',
        ]);

        if($request->status && Carbon::parse($request->expired)->isPast()) {
            //validate and custom message
            return redirect()->back()->with('error', 'The end date must be a date after today if status is active');
        } elseif(!$request->status && Carbon::parse($request->expired)->isFuture()) {
            //validate and custom message
            return redirect()->back()->with('error', 'The end date must be a date before today if status is inactive');
        }


        $this->manageSubscriptionService->update($request, $subscription);
        return redirect()->back()->with('success', 'Subscription updated successfully');
    }
}
