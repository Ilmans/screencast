<?php

namespace App\Policies;

use App\Models\User;
use App\Models\video;
use Illuminate\Auth\Access\Response;

class WatchVideoPolicy
{
   
    public function watch (User $user, Video $video) {
        $isSeriePublished = $video->serie()->first()->status === 'published';
        $isVideoFree = $video->is_free;
        $isUserAdmin = $user->is_admin;

        if($isUserAdmin || ($isSeriePublished && $isVideoFree) || ($isSeriePublished && $user->isHaveActiveSubscription())) {
            return true;
        } else {
            return false;
        }
    }
}
