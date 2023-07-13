<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Topic extends Model
{
    use HasFactory;

    public function series(): MorphToMany
    {
        return $this->morphedByMany(Serie::class, "topicable");
    }

    public function articles(): MorphToMany
    {
        return $this->morphedByMany(Article::class, "topicable");
    }
}
