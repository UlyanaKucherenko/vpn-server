<?php

namespace App\Http\Resources;

use App\Models\Subscription;
use Illuminate\Http\Resources\Json\JsonResource;

class PlanResource extends JsonResource
{
    public function toArray($request)
    {
        $plan = $this->resource;
        return [
            'id' => $plan->id,
            'name' => $plan->name,
            'price' => $plan->price,
            'duration' => $plan->duration,
            'description' => $plan->description,
            'ads' => (bool)$plan->ads,
            'userCount' => Subscription::activeSubscriptionCount($plan->id)
        ];
    }
}
