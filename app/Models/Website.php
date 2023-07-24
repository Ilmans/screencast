<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Website extends Model
{


    protected $fillable = [
        'logo',
        'favicon',
        'name',
        'about',
        'address',
        'socials',
        'contact'

    ];
    use HasFactory;
}
