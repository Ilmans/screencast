<?php

namespace App\Http\Controllers;

use App\Models\Video;
use App\Models\WatchHistory;
use Illuminate\Http\Request;

class VideoController extends Controller
{

    public function saveWatchProgress(Request $request)
    {
        $video = Video::find($request->video_id);
        $secondsTime = $request->secondsTime;

        // update or create
        WatchHistory::updateOrCreate(
            [
                'user_id' => auth()->id(),
                'video_id' => $video->id,
            ],
            [
                'watch_duration' => $secondsTime,
                'last_watched_at' => now(),
            ]
        );

        return response()->json([
            'message' => 'success',
            'video' => $video,
            'secondsTime' => $secondsTime,
        ]);
    }
}
