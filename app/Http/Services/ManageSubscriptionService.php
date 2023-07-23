<?php
namespace App\Http\Services;

use App\Models\Subscription;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;

class ManageSubscriptionService
{
    private Builder $subscriptions;

    public function __construct()
    {
        $this->subscriptions = Subscription::query();
    }

    public function getAllSubscriptions(): LengthAwarePaginator
    {
        return $this->subscriptions
            ->with('user')
            ->with('packagePrice')
            ->paginate(10)
            ->withQueryString();
    }

    public function search(): self
    {
        $request = request();
        $request->whenFilled('search', function ($searchTerm) {
            $this->subscriptions->whereHas('user', function ($query) use (
                $searchTerm
            ) {
                $query->where('email', 'LIKE', "%{$searchTerm}%");
            });
        });
        return $this;
    }

    public function sort(): self
    {
        $request = request();
        if ($request->sort) {
            switch ($request->sort) {
                case 'newest':
                    $this->subscriptions->latest();
                    break;
                case 'oldest':
                    $this->subscriptions->oldest();
                    break;
                case 'expired':
                    $this->subscriptions->orderBy('ends_at', 'asc');
                    break;

                default:
                    $this->subscriptions->latest();
                    break;
            }
        }
        return $this;
    }

    public function filter(): self
    {
        $request = request();
        if ($request->filter) {
            switch ($request->filter) {
                case 'active':
                    $this->subscriptions->where('is_active', true);
                    break;
                case 'expired':
                    $this->subscriptions->where('ends_at', '<', now());
                    break;
                default:
                    break;
            }
        }
        return $this;
    }


    public function update ($request, $subscription)
    {
        $subscription->update([
            'is_active' => $request->status,
            'ends_at' => $request->expired,
        ]);
    }
}

?>
