<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Serie extends Model
{
    use HasFactory;

    public function videos()
    {
        return $this->hasMany(Video::class);
    }

    public function topics() : MorphToMany
    {
        return $this->morphToMany(Topic::class, "topicable");
    }

    public function getUpdatedAtAttribute($value)
    {
        return Carbon::parse($value)->format("d M Y");
    }
}
