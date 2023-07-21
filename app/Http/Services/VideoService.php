<?php

namespace App\Http\Services;

use App\Models\Serie;
use App\Models\Subscription;
use App\Models\Video;

class VideoService
{

    /**
     * is video can watch
     * if user not logged in, return false
     * if user logged in and video not free, check user subscription
     */

    public function getVideosBySerie(Serie $serie)
    {
        return $serie->videos()->orderBy('order_num')->get();
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
}
