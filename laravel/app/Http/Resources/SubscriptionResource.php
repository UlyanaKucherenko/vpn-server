<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SubscriptionResource extends JsonResource
{
    public function toArray($request)
    {
        $subscription = $this->resource;
        return [
            'id' => $subscription->id,
            'planName' => $subscription->plan->name,
            'expiredAt' => strtotime($subscription->expiredAt),
            'isActive' => $this->isActiveSubscription($subscription->expiredAt)
        ];
    }

    private function isActiveSubscription($expiredAt): bool
    {
        return !$expiredAt || strtotime(now()) < strtotime($expiredAt);
    }
}
