<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Subscription extends Model
{
    use HasFactory;

    protected $fillable = ['userId', 'planId', 'expiredAt', 'deletedAt', 'stripeSubscriptionId'];

    public function plan(): HasOne
    {
        return $this->hasOne(Plan::class, 'id', 'planId');
    }


    public static function activeSubscriptionCount(int $planId): int
    {
        $plan = Plan::query()->find($planId);

        if (empty($plan->price)) {
            return self::query()
                ->where('planId', '=', $planId)
                ->count();
        }

        return self::query()
            ->where('planId', '=', $planId)
            ->whereDate('expiredAt', '>', now())
            ->count();
    }

    public function scopeActiveSubscription(Builder $query, int $userId): Builder
    {
        return $query
            ->where('userId', '=', $userId)
            ->where(function ($q) {
                $q->whereDate('expiredAt', '>', now());
                $q->orWhereNull('expiredAt');
            });
    }
}
