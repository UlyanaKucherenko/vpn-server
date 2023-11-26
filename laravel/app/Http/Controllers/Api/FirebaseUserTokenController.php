<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FirebaseToken\FirebaseUserTokenRequest;
use App\Services\FirebaseTokenService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class FirebaseUserTokenController extends Controller
{
    public function store(FirebaseUserTokenRequest $request, FirebaseTokenService $firebaseTokenService): JsonResponse
    {
        if ($firebaseTokenService->saveToken(Auth::id(), $request->validated('token'))) {
            return response()->json(['status' => true, 'message' => 'Token was saved']);
        }
        return response()->json(['status' => false, 'message' => 'Token was not saved'], 400);
    }

    public function destroy(FirebaseUserTokenRequest $request, FirebaseTokenService $firebaseTokenService): JsonResponse
    {
        if ($firebaseTokenService->deleteToken(Auth::id(), $request->validated('token'))) {
            return response()->json(['status' => true, 'message' => 'Token was deleted']);
        }
        return response()->json(['status' => false, 'message' => 'Token was not deleted'], 400);
    }
}
