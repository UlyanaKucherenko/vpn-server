<?php

namespace App\Http\Resources\Auth;

use App\Http\Resources\ServerResource;
use App\Models\ServerUse;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\PersonalAccessTokenResult;

class AuthResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        /** @var PersonalAccessTokenResult $token */
        $token = $this->resource;
        $user = Auth::user();
        return [
            'tokenType' => 'Bearer',
            'token' => $token->accessToken,
            'expiresAt' => Carbon::parse($token->token->expires_at)->toDateTimeString(),
            'server' => ServerResource::make(ServerUse::lastServer($user->id)),
            'email' => $user->email,
            'subscriptionPlan' => $user->subscription->plan->name ?? '',
            'allowNotification' => $user->allowNotification,
            'reconnect' => $user->reconnect,
        ];
    }

}
