<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateTopicRequest;
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


    public function create()
    {
        return inertia('Admin/Topic/Create');
    }

    public function store(CreateTopicRequest $request)
    {
        try {
            $this->topicService->createTopic($request);
            return redirect()->route('admin.topics.index');
        } catch (\Throwable $th) {
            throw $th;
            return back()->with('error', 'Something went wrong');
        }
    }
}
