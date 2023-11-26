<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\SocialiteLoginRequest;
use App\Http\Resources\Auth\AuthResource;
use App\Services\Auth\AuthService;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Http\JsonResponse;

class SocialLoginController extends Controller
{
    public function __invoke(SocialiteLoginRequest $request, AuthService $authService): JsonResponse|AuthResource
    {
        $data = $request->validated();

        $socialUser = false;
        try {
            $socialUser = $authService->getSocialAccountLogin($data['provider'], $data['accessToken']);
        } catch (ClientException $exception) {
            \Log::info('FAILED social login ' . $exception->getMessage());
            return response()->json(['status' => false, 'message' => 'Invalid Credentials'], 401);
        }

        $email = $data['email'] ?? $socialUser->email;

        if (!isset($email) || !$socialUser) {
            return response()->json(['status' => false, 'message' => 'Social login failed'], 400);
        }

        $userId = $authService->userBySocialProvider($data['provider'], $socialUser->getId());

        if (!$userId) {
            $authService->createUserBySocial($email, $data['provider'], $socialUser->getId());
        }

        $token = $authService->login([
            'email' => $data['email'],
            'password' => config('app.SOCIAL_ACC_PASSWORD'),
        ]);

        return ($token)
            ? AuthResource::make($token)
            : response()->json(['status' => false, 'message' => 'Unauthorized'], 401);
    }
}
