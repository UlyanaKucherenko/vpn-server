<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\ForgotPasswordRequest;
use App\Http\Requests\User\IndexUsersRequest;
use App\Http\Requests\User\UpdateForgottenPasswordRequest;
use App\Http\Requests\User\UpdatePasswordRequest;
use App\Http\Requests\User\UpdatePaymentMethodRequest;
use App\Http\Requests\User\UpdateSettingsRequest;
use App\Http\Resources\UsersResource;
use App\Models\User;
use App\Services\ForgotPasswordService;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index(IndexUsersRequest $request, UserService $userService): AnonymousResourceCollection
    {
        $data = $request->validated();
        return UsersResource::collection($userService->getAll($data)->paginate(7));
    }

    public function forgotPassword(ForgotPasswordRequest $request, ForgotPasswordService $forgotPasswordService): JsonResponse
    {
        $data = $request->validated();
        if ($forgotPasswordService->sendLink($data['email'])) {
            return response()->json(['status' => true, 'message' => 'Email with link was sent',
                'link' => 'fast_vpn://forgot-password?email=' . $data['email'] . '&hash=' . User::query()->where('email', '=', $data['email'])->first()->hash //todo delete after connect mail
            ]);
        }
        return response()->json(['status' => false, 'message' => 'Email not found or entered incorrectly.'], 400);
    }

    public function updateForgottenPassword(UpdateForgottenPasswordRequest $request, ForgotPasswordService $forgotPasswordService): JsonResponse
    {
        $data = $request->validated();
        if ($forgotPasswordService->updateForgottenPassword($data)) {
            return response()->json(['status' => true, 'message' => 'Password was updated']);
        }
        return response()->json(['status' => false, 'message' => 'Password was not updated'], 400);
    }

    public function updatePassword(UpdatePasswordRequest $request, UserService $userService): JsonResponse
    {
        $data = $request->validated();
        $email = Auth::user()->email;
        if (!$userService->checkUserPassword($email, $data['oldPassword'])) {
            return response()->json(['status' => false, 'message' => 'Your old password is incorrect'], 400);
        }

        if ($userService->changeUserPassword($email, $data['password'])) {
            return response()->json(['status' => true, 'message' => 'Password was changed']);
        }
        return response()->json(['status' => false, 'message' => 'Password was not changed'], 400);
    }

    public function addPaymentMethodForUser(UpdatePaymentMethodRequest $request, UserService $userService): JsonResponse
    {
        if ($userService->updatePaymentMethod(Auth::id(), $request->validated('paymentMethod'))) {
            return response()->json(['status' => true, 'message' => 'Payment method was updated']);
        }
        return response()->json(['status' => false, 'message' => 'Payment method was not saved'], 400);
    }

    public function updateSettings(UpdateSettingsRequest $request): JsonResponse
    {
        $data = $request->validated();
        if (Auth::user()->update($data)) {
            return response()->json(['status' => true, 'message' => 'User settings was updated']);
        }
        return response()->json(['status' => false, 'message' => 'User settings was not saved'], 400);
    }
}
