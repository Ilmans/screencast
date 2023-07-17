<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WatchLater extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'serie_id',
    ];


    // like 8m ago
    public function getCreatedAtAttribute($value)
    {
        return \Carbon\Carbon::parse($value)->diffForHumans();
    }

    public function serie()
    {
        return $this->belongsTo(Serie::class);
    }
}
