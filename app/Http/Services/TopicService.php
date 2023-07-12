<?php

namespace App\Http\Services;

use App\Models\Topic;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;

class TopicService
{
    public function getAllTopics(): Collection
    {

        return Cache::rememberForever('topics', function () {
            return Topic::all();
        });
    }
}
