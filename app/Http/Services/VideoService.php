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




    public function storeVideo($request)
    {
        $order_num = Video::where('serie_id', $request->serie_id)->max('order_num');

        $duration = $this->validatedYoutubeVideo($request->unique_video_id);
        Video::create([
            'title' => $request->title,
            'description' => $request->description,
            'unique_video_id' => $request->unique_video_id,
            'is_free' => $request->is_free,
            'seconds_time' => $duration,
            'order_num' => $order_num + 1,
            'serie_id' => $request->serie_id,
        ]);
    }
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
        $pattern = '/^P(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?)?$/';
        if (preg_match($pattern, $iso8601Duration, $matches)) {
            $hours = isset($matches[1]) ? (int)$matches[1] : 0;
            $minutes = isset($matches[2]) ? (int)$matches[2] : 0;
            $seconds = isset($matches[3]) ? (int)$matches[3] : 0;

            $totalSeconds = $hours * 3600 + $minutes * 60 + $seconds;
            return $totalSeconds;
        }

        return -1; // Atau kembalikan nilai lain untuk menandakan kesalahan jika format tidak sesuai.
    }
}
