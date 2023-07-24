<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Model
{

    protected $fillable = [
            'bank_name','logo','account_name','account_number'
    ];
    use HasFactory;
}
