<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateTopicRequest;
use App\Http\Services\TopicService;
use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{

    private $topicService;
    public function __construct(TopicService $topicService)
    {
        $this->topicService = $topicService;
    }
    
    public function index() : \Inertia\Response
    {

        $topics = $this->topicService->getAllTopics();
        return inertia('Admin/Topic/Index',compact('topics'));
    }


    public function create()
    {
        return inertia('Admin/Topic/Create');
    }

    public function store(CreateTopicRequest $request) : \Illuminate\Http\RedirectResponse
    {
       
        try {
            $this->topicService->createTopic($request);
            return redirect()->route('admin.topics.index')->with('success', 'Topic created successfully');
        } catch (\Throwable $th) {
          //  throw $th;
            return back()->with('error', 'Something went wrong');
        }
    }

    public function edit(Topic $topic) : \Inertia\Response
    {
        return inertia('Admin/Topic/Edit',compact('topic'));
    }

    public function update(Request $request, Topic $topic) : \Illuminate\Http\RedirectResponse
    {
       
        try {
            $this->topicService->updateTopic($request,$topic);
            return redirect()->route('admin.topics.index')->with('success', 'Topic updated successfully');
        } catch (\Throwable $th) {
            return back()->with('error', 'Something went wrong');
        }
    }

    public function destroy(Topic $topic) : \Illuminate\Http\RedirectResponse
    {
        try {
            $this->topicService->deleteTopic($topic);
            return redirect()->route('admin.topics.index')->with('success', 'Topic deleted successfully');
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }
}
