<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'invoice_number',
        'package_price_id',
        'total',
        'status',
        'expired_at',
    ];


    public function packagePrice()
    {
        return $this->belongsTo(PackagePrice::class);
    }


    public function getCreatedAtAttribute()
    {
        return  \Carbon\Carbon::parse($this->attributes['created_at'])->format('d M Y h:i');
    }
}
