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
            return Topic::whereType('series')->has('series')->get();
        });
        
    }


    public function getAllArticlesTopics(): Collection
    {
        // only get topic who has related series
        return Cache::rememberForever('topics_articles', function () {
            return Topic::whereType('article')->has('articles')->get();
        });
    }

    public function getAllTopics()
    {
        return Topic::orderBy('created_at', 'desc')->paginate(10)->withQueryString();
    }



}
