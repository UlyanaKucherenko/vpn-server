<?php

namespace App\Services;

use App\Models\FirebaseUserToken;
use Illuminate\Support\Facades\Log;
use Kreait\Firebase\Exception\Messaging\InvalidMessage;
use Kreait\Firebase\Messaging\CloudMessage;
use Kreait\Firebase\Messaging\Notification;

class FirebaseService
{
    public function sendPushNotification(int $userId): void
    {
        $messaging = app('firebase.messaging');
        $deviceTokens = FirebaseUserToken::query()
            ->where('userId', '=', $userId)
            ->pluck('token')->values()->toArray();

        foreach ($deviceTokens as $token) {
            $validationTokens = $messaging->validateRegistrationTokens([$token]);
            if (!in_array($token, $validationTokens['valid'])) {
                \Log::info('DELETE sendPushNotification  $token:  ' . $token);
                FirebaseUserToken::query()->whereToken($token)->delete();
            } else {
                $message = CloudMessage::new()
                    ->withTarget('token', $token)
                    ->withNotification($this->notification());
                try {
                    $messaging->validate($message);
                    $messaging->send($message);
                    Log::info('Notification has been sent to userId ' . $userId);
                } catch (InvalidMessage $e) {
                    Log::error('Token not found _ ' . $token);
                    FirebaseUserToken::query()->whereToken($token)->delete();
                }
            }
        }
    }

    private function notification(): Notification
    {
        return Notification::create('Subscription funds will be debited in a day');
    }
}
