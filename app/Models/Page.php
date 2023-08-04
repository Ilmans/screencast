<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    protected $fillable = ['title','content','slug'];


    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d M y');
    }
}
