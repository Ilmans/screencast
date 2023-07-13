<?php

namespace App\Http\Services;

use App\Models\Topic;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;

class TopicService
{
    public function getAllSeriesTopics(): Collection
    {
        // only get topic who has related series
        return Cache::rememberForever('topics_series', function () {
            return Topic::has('series')->get();
        });
        
    }


    public function getAllArticlesTopics(): Collection
    {
        // only get topic who has related series
        return Cache::rememberForever('topics_articles', function () {
            return Topic::has('articles')->get();
        });
    }
}
