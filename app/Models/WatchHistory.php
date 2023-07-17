<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WatchHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'video_id',
        'watch_duration',
        'last_watched_at',
    ];


    public function video()
    {
        return $this->belongsTo(Video::class);
    }
}
