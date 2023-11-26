<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UsersResource extends JsonResource
{
    public function toArray($request)
    {
        $user = $this->resource;
        return [
            'id' => $user->id,
            'email' => $user->email,
            'subscription' => SubscriptionResource::make($user->subscription),
        ];
    }
}
