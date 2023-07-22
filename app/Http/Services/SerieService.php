<?php

namespace App\Http\Services;

use App\Models\Serie;
use App\Models\Topic;
use Illuminate\Database\Eloquent\Builder;

class SerieService extends SerieManagementService
{
    private Builder $series;

    public function __construct()
    {
        $this->series = Serie::query();
    }

    public function published (){
        $this->series->where('status', 'published');
        return $this;
    }

    
    public function setSeries(Builder $series)
    {
        $this->series = $series;
    }


    public function getSingle($serieId)
    {
        return $this->series->where('id', $serieId)
            ->with(['topics' => function ($q) {
                return $q->select('name');
            }])->with('videos')->withCount('videos')
            ->withSum('videos', 'seconds_time')->first();
    }

    public function byTopic(Topic $topic)
    {
        $this->series->whereHas('topics', function ($query) use ($topic) {
            $query->where('topics.id', $topic->id);
        });
        return $this;
    }



    public function sort () {
        $request = request();

        switch ($request->sort) {
            case 'latest':
                $this->series->latest();
                break;
            case 'oldest':
                $this->series->oldest();
                break;
            case 'most_videos':
                $this->series->withCount('videos')->orderByDesc('videos_count');
                break;
            case 'least_videos':
                $this->series->withCount('videos')->orderBy('videos_count');
                break;
            case 'most_time':
                $this->series->withSum('videos', 'seconds_time')->orderByDesc('videos_seconds_time_sum');
                break;
            case 'least_time':
                $this->series->withSum('videos', 'seconds_time')->orderBy('videos_seconds_time_sum');
                break;
            default:
                $this->series->latest();
                break;
                
        }

        return $this;
    }
    public function search($keyword)
    {
        if ($keyword) {
            $this->series->where('title', 'like', "%$keyword%");
        }
        return $this;
    }


    public function getSeries()
    {
        return $this->series->with('topics')->withCount('videos')
            ->withSum('videos', 'seconds_time')->paginate(9);
    }


    /**
     * Is saved watch later
     */

    public function isSavedWatchLater($serie): bool
    {
        if (!auth()->check()) {
            return false;
        }
        $user = request()->user();


        return $user->watchLaters()->where('serie_id', $serie->id)->exists();
    }
}
