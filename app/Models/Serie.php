<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Serie extends Model
{
    use HasFactory;

    public function videos()
    {
        return $this->hasMany(Video::class);
    }

    public function topics()
    {
        return $this->belongsToMany(Topic::class, TopicSerie::class);
    }

    public function getUpdatedAtAttribute($value)
    {
        return Carbon::parse($value)->format("d M Y");
    }
}
