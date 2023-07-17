<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


    /**
     * Get the user's subscriptions.
     */

    public function subscription()
    {
        return $this->hasOne(Subscription::class);
    }

    /**
     * Get the user's articles.
     */
    public function articles()
    {
        return $this->hasMany(Article::class);
    }

    /**
     * Get the user's watch laters.
     */
    public function watchLaters()
    {
        return $this->hasMany(WatchLater::class);
    }

    /**
     * Get the user's invoices.
     */

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

    public function watchHistories()
    {
        return $this->hasMany(WatchHistory::class);
    }

    //scope

    public function isHaveActiveSubscription()
    {
        return $this->subscription()->where('ends_at', '>', now())->exists();
    }
}
