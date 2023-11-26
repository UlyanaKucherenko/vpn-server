<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $request->user()->token()->revoke();

        return response()->json([
            'status'  => true,
            'message' => 'You are successfully logged out',
        ]);
    }
}
