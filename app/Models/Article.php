<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'body',
        'synopsis',
        'user_id',
        'views',
    ];

    


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }


    public function topics(): MorphToMany
    {
        return $this->morphToMany(Topic::class, "topicable");
    }


    public function getCreatedAtAttribute()
    {
        return  $this->attributes['created_at'] = \Carbon\Carbon::parse($this->attributes['created_at'])->diffForHumans();
    }
}
