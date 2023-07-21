<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\VideoRequest;
use App\Http\Services\VideoService;
use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    private $serviceVideo;

    public function __construct(VideoService $videoService)
    {
        $this->serviceVideo = $videoService;
    }

    public function update(Video $video, VideoRequest $request)
    {
       
        $this->serviceVideo->updateVideo($request, $video);
        return back()->with('success', 'Video updated successfully');
    }
}
