<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    protected $fillable = ["title","description","unique_video_id","is_free","order_num","serie_id","seconds_time"];

    public function serie() {
     return $this->belongsTo(Serie::class,"serie_id");
    }



}
