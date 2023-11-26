<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Plan\StorePlanRequest;
use App\Http\Requests\Plan\UpdatePlanRequest;
use App\Http\Resources\PlanForUserResource;
use App\Http\Resources\PlanResource;
use App\Models\Plan;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PlanController extends Controller
{

    public function index(): AnonymousResourceCollection
    {
        return PlanResource::collection(Plan::query()->get());
    }

    public function store(StorePlanRequest $request, Plan $plan): JsonResponse
    {
        $data = $request->validated();
        if ($plan->create($data)) {
            return response()->json(['status' => true, 'message' => 'Subscription plan was created']);
        }
        return response()->json(['status' => false, 'message' => 'Subscription plan was not created'], 400);
    }

    public function update(UpdatePlanRequest $request, Plan $plan): JsonResponse
    {
        $data = $request->validated();
        if ($plan->update($data)) {
            return response()->json(['status' => true, 'message' => 'Subscription plan was updated']);
        }
        return response()->json(['status' => false, 'message' => 'Subscription plan was not updated'], 400);
    }

    public function destroy(Plan $plan): JsonResponse
    {
        if ($plan->delete()) {
            return response()->json(['status' => true, 'message' => 'Subscription plan was deleted']);
        }
        return response()->json(['status' => false, 'message' => 'Subscription plan was not deleted'], 400);
    }

    public function planForUser(): AnonymousResourceCollection
    {
        return PlanForUserResource::collection(Plan::query()->get());
    }
}
