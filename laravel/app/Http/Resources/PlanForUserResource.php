<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PlanForUserResource extends JsonResource
{
    public function toArray($request)
    {
        $plan = $this->resource;
        return [
            'id' => $plan->id,
            'name' => $plan->name,
            'price' => $plan->price / 100,
            'duration' => $plan->duration,
            'description' => $plan->description,
            'ads' => (bool)$plan->ads,
        ];
    }
}
