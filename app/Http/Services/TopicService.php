<?php

namespace App\Http\Services;

use App\Models\Topic;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;

class TopicService extends UploadImageService
{

  
    private $pathImage = 'images/topics/';

    public function createTopic ($request) : void
    {
        $slug = \Str::slug($request->name);
        $imageName = $this->uploadImage($slug, $request->file('image'), $this->pathImage);
        Topic::create([
            'name' => $request->name,
            'slug' => $slug,
            'image' => $imageName,
            'type' => $request->type,
            'description' => $request->description ?? ' ',
        ]);
    }


    public function updateTopic($request,$topic) : void
    {
       
        $slug = \Str::slug($request->name);
        $imageName = $request->file('image') ? $this->uploadImage($slug, $request->file('image'), $this->pathImage) : $topic->image;
        if ($request->file('image') && $topic->image) {
            $this->deleteImage($topic->image, $this->pathImage);
        }
        $topic->update([
            'name' => $request->name,
            'slug' => $slug,
            'image' => $imageName,
            'type' => $request->type,
            'description' => $request->description ?? ' ',
        ]); 
    }



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
