<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Services\TopicService;
use Illuminate\Http\Request;

class TopicController extends Controller
{

    private $topicService;
    public function __construct(TopicService $topicService)
    {
        $this->topicService = $topicService;
    }
    
    public function index()
    {

        $topics = $this->topicService->getAllTopics();
        return inertia('Admin/Topic/Index',compact('topics'));
    }
}
