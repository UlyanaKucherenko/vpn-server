<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterFormRequest;
use App\Http\Resources\Auth\AuthResource;
use App\Services\Auth\AuthService;
use App\Services\StripeService;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;

class RegistrationController extends Controller
{
    public function __invoke(
        RegisterFormRequest $request,
        AuthService         $authService,
        UserService         $userService,
        StripeService       $stripeService,
    ): JsonResponse|AuthResource
    {
        $data = $request->validated();

        if (!$userService->register($data['email'], $data['password'])) {
            return response()->json(['status' => false, 'message' => 'Registration failed'], 400);
        }

        $customer = $stripeService->createCustomer($data['email']);
        if ($customer) {
            $userService->addCustomerToUser($data['email'], $customer->id);
        }

        $token = $authService->login($data);

        return ($token)
            ? AuthResource::make($token)
            : response()->json(['status' => false, 'message' => 'Unauthorized'], 401);
    }
}
