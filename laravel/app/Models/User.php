<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['email', 'password', 'roleId', 'hash', 'stripeCustomerId', 'stripePaymentMethod', 'allowNotification', 'reconnect'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = ['password',];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->password = bcrypt($model->password);
        });
    }

    public function role(): HasOne
    {
        return $this->hasOne(Role::class, 'id', 'roleId');
    }

    public function socialLogin(): HasMany
    {
        return $this->hasMany(SocialAccount::class);
    }

    public function subscription(): HasOne
    {
        return $this->hasOne(Subscription::class, 'userId', 'id');
    }
}
