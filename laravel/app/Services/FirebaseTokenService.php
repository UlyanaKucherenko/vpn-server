<?php

namespace App\Services;

use App\Models\FirebaseUserToken;

class FirebaseTokenService
{
    public function saveToken(int $userId, string $token): bool
    {
        return (bool)FirebaseUserToken::query()->updateOrCreate([
            'user_id' => $userId,
            'token' => $token,
        ]);
    }

    public function deleteToken(int $userId, string $token): bool
    {
        return (bool)FirebaseUserToken::query()->where([
            ['user_id', '=', $userId],
            ['token', '=', $token],
        ])->delete();
    }
}
