<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;


    public function packagePrice()
    {
        return $this->belongsTo(PackagePrice::class);
    }

    public function getCreatedAtAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->format('d/m/Y');
    }

    public function getEndsAtAttribute()
    {
        return Carbon::parse($this->attributes['ends_at'])->format('d/m/Y');
    }
}
