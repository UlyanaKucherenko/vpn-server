<?php

namespace App\Services;

use App\Models\Plan;
use App\Models\Subscription;
use App\Models\User;

class SubscriptionService
{
    public function __construct(private StripeService $stripeService)
    {
    }

    public function createSubscription(int $planId, int $userId): bool
    {
//        if ($this->checkValidCurrentSubscription($userId)) {
//            return false;
//        }
        $plan = Plan::query()->find($planId);
        $user = User::query()->find($userId);

        if (!$plan || !$user->stripeCustomerId || !$user->stripePaymentMethod) return false;

        $stripeSubscription = null;

        if ($plan->price > 0) {
            $stripeSubscription = $this->stripeService->subscribe($user->stripeCustomerId, $planId);
            if (!$stripeSubscription) return false;
        }

        $this->deleteSubscription($userId, true);

        return (bool)Subscription::query()
            ->updateOrCreate(
                ['userId' => $userId, 'planId' => $planId],
                [
                    'planId' => $planId,
                    'expiredAt' => $plan->duration ? now()->addDays($plan->duration) : null,
                    'deletedAt' => null,
                    'stripeSubscriptionId' => $stripeSubscription ? $stripeSubscription->id : null,
                ]
            );
    }

    public function deleteSubscription(int $userId, $now = false): bool
    {
        $subscription = Subscription::query()
            ->where('userId', '=', $userId)
            ->whereNull('deletedAt')
            ->first();

        if (isset($subscription->stripeSubscriptionId)) {
            if (!$this->stripeService->unsubscribe($subscription->stripeSubscriptionId)) return false;
        }

        if ($now) {
            return (bool)Subscription::query()
                ->where('userId', '=', $userId)
                ->update([
                    'expiredAt' => now(),
                    'deletedAt' => now()
                ]);
        }

        return (bool)Subscription::query()
            ->where('userId', '=', $userId)
            ->update([
                'deletedAt' => now()
            ]);
    }

    public function updateSubscriptionPeriod(int $userId): bool
    {
        $subscription = Subscription::activeSubscription($userId)->first();
        $plan = Plan::query()->find($subscription->planId);

        if (!$subscription || !$plan) {
            return false;
        }
        return (bool)$subscription->update([
            'expiredAt' => now()->addDays($plan->duration)
        ]);
    }

    public function checkValidCurrentSubscription(int $userId): bool
    {
        $subscription = Subscription::query()->where('userId', '=', $userId)->first();

        return ($subscription && $subscription->expiredAt > now());
    }
}
