<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CurrentSubscriptionResource extends JsonResource
{
    public function toArray($request)
    {
        $subscription = $this->resource;
        return [
            'id' => $subscription->id,
            'expiredAt' => $subscription->expiredAt ? strtotime($subscription->expiredAt) : 0,
            'plan' => PlanForUserResource::make($subscription->plan),
        ];
    }
}
