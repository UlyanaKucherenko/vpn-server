<?php

namespace App\Services\Auth;

use App\Models\Role;
use App\Models\SocialAccount;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\PersonalAccessTokenResult;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Two\User as SocialUser;

class AuthService
{

    public function __construct(private User $user)
    {
    }

    /**
     * @param User $user
     * @return PersonalAccessTokenResult
     */
    private function makeTokenForUser(User $user): PersonalAccessTokenResult
    {
        $token = $user->createToken(config('app.name'));
        $token->token->expires_at = now()->addMinutes(config('app.PASSPORT_TOKEN_LIFETIME'));
        $token->token->save();
        return $token;
    }

    private function createTokenAuthUser(): ?PersonalAccessTokenResult
    {
        return Auth::check() ? $this->makeTokenForUser(Auth::user()) : null;
    }

    public function login($credentials): PersonalAccessTokenResult|bool|null
    {
        $loginData = ['email' => $credentials['email'], 'password' => $credentials['password']];
        return Auth::attempt($loginData) ? $this->createTokenAuthUser() : false;
    }

    public function getSocialAccountLogin(string $provider, string $accessToken): SocialUser
    {
        return Socialite::driver($provider)->userFromToken($accessToken);
    }

    public function userBySocialProvider(string $provider, string $providerId): int|null
    {
        $providerData = SocialAccount::query()
            ->where([
                ['provider', '=', $provider],
                ['providerId', '=', $providerId]
            ])
            ->first();
        return ($providerData) ? $providerData->user_id : null;
    }

    public function createUserBySocial(string $email, string $provider, string $providerId): bool
    {
        $user = User::query()->where('email', '=', $email)->first();

        if (!$user) {
            $user = User::query()->create([
                'email' => $email,
                'roleId' => Role::getRoleIdUser(),
                'password' => config('app.SOCIAL_ACC_PASSWORD')
            ]);
        }

        return (bool)SocialAccount::query()->create([
            'user_id' => $user->id,
            'provider' => $provider,
            'providerId' => $providerId,
        ]);
    }
}
