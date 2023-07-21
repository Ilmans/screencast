<?php

namespace App\Http\Services;

use App\Models\Serie;
use App\Models\Subscription;
use App\Models\Video;
use DateInterval;
use Google_Client;
use Google_Service_YouTube;

class VideoService
{
    private $youtubeUrl = 'https://www.youtube.com/watch?v=';

    public function getVideosBySerie(Serie $serie)
    {
        return $serie
            ->videos()
            ->orderBy('order_num')
            ->get();
    }

    public function canWatch(Video $video): bool
    {
        if (auth()->check()) {
            if ($video->is_free) {
                return true;
            }
            $check = Subscription::where('user_id', auth()->id())
                ->where('is_active', true)
                ->first();
            return $check ? true : false;
        }

        return false;
    }

    // manage

    public function updateVideo($request, $video)
    {
        $duration = $this->validatedYoutubeVideo($request->unique_video_id);
        $video->update([
            'title' => $request->title,
            'description' => $request->description,
            'unique_video_id' => $request->unique_video_id,
            'is_free' => $request->is_free,
            'seconds_time' => $duration,
        ]);
    }

    public function validatedYoutubeVideo($videoId)
    {
        $client = new Google_Client();
        $client->setDeveloperKey('AIzaSyBd37IsmFaWi-vUjbFrng5XSwDtjapZ-pk');

        $youtube = new Google_Service_YouTube($client);

        $video = $youtube->videos->listVideos('snippet,contentDetails', [
            'id' => $videoId,
        ]);

        if (count($video) === 0) {
            throw new \Exception('Video not found');
        }

        $duration = $video[0]['contentDetails']['duration'];
        return $this->getDurationInSeconds($duration);
    }

    function getDurationInSeconds($iso8601Duration)
    {
        $iso8601Duration = str_replace('PT', 'P0DT0H', $iso8601Duration);
        $interval = new DateInterval($iso8601Duration);
        $seconds =
            $interval->days * 24 * 60 * 60 +
            $interval->h * 60 * 60 +
            $interval->i * 60 +
            $interval->s;

        return $seconds;
    }
}
