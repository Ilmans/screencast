<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;


    protected $fillable = [
        'user_id',
        'package_price_id',
        'is_active',
        'ends_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function packagePrice()
    {
        return $this->belongsTo(PackagePrice::class);
    }

    public function getCreatedAtAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->format('d/m/Y');
    }

 
    public function getUpdatedAtAttribute()
    {
        return Carbon::parse($this->attributes['updated_at'])->format('d/m/Y');
    }
}
