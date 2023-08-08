<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Topic extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'image',
        'type',
        'description',
    ];

    public function series(): MorphToMany
    {
        return $this->morphedByMany(Serie::class, "topicable");
    }

    public function articles(): MorphToMany
    {
        return $this->morphedByMany(Article::class, "topicable");
    }


    // boot when update ,clear cache topic
    protected static function boot()
    {
        parent::boot();

        static::created(function(){
            cache()->forget('topics_series');
            cache()->forget('topics_articles');
        });
        static::updated(function () {
            cache()->forget('topics_series');
            cache()->forget('topics_articles');
        });
    }
}
