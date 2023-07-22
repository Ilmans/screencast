<?php

namespace App\Http\Controllers;

use App\Http\Services\SerieService;
use App\Http\Services\TopicService;
use App\Models\Serie;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class TopicController extends Controller
{
    private $serieService;
    private $topicService;
    public function __construct(
        SerieService $serieService,
        TopicService $topicService
    ) {
        $this->serieService = $serieService;
        $this->topicService = $topicService;
    }
    public function index(Request $request)
    {
        $topics = $this->topicService->getAllSeriesTopics();
        $series = $this->serieService
            ->search($request->search ?? null)
            ->published()
            ->getSeries();

        return inertia('Topic/Index', compact('topics', 'series'));
    }

    public function show(Topic $topic, Request $request)
    {
        $topics = $this->topicService->getAllSeriesTopics();
        $currentTopic = $topic;
        $series = $this->serieService
            ->search($request->search ?? null)
            ->byTopic($topic)
            ->published()
            ->getSeries();
        return inertia('Topic/Show', compact('currentTopic', 'topics', 'series'));
    }
}
