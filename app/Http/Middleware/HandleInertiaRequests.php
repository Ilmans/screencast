<?php

namespace App\Http\Middleware;

use App\Http\Services\TopicService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        $topicService = new TopicService();
        $isUserSubscribed = Cache::remember('isUserPremiem', 60 * 60 * 24, fn () => $request->user()?->isHaveActiveSubscription());
        $website = Cache::rememberForever('website', fn () => \App\Models\Website::first());
        $topic = [
            'series' => $topicService->getAllSeriesTopics(),
            'articles' => $topicService->getAllArticlesTopics(),
        ];
        return array_merge(parent::share($request), [
            'isUserSubscribed' => $isUserSubscribed,
            'auth' => ['user' => $request->user(),],
            'website' => $website,
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'success' => fn () => $request->session()->get('success'),
            'error' => fn () => $request->session()->get('error'),
            'topic' => fn () => $topic,

        ]);
    }
}
