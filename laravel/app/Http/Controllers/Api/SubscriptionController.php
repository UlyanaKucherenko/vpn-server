<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Subscription\CreateSubscriptionRequest;
use App\Http\Resources\CurrentSubscriptionResource;
use App\Models\Plan;
use App\Models\Subscription;
use App\Models\User;
use App\Services\StripeService;
use App\Services\SubscriptionService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubscriptionController extends Controller
{
    public function subscribe(CreateSubscriptionRequest $request, SubscriptionService $subscriptionService): JsonResponse
    {
        if ($subscriptionService->createSubscription($request->validated('planId'), Auth::id())) {
            return response()->json(['status' => true, 'message' => 'Successful subscribe']);
        }
        return response()->json(['status' => false, 'message' => 'Not successful subscribe'], 400);
    }

    public function unsubscribe(SubscriptionService $subscriptionService): JsonResponse
    {
        if ($subscriptionService->deleteSubscription(Auth::id())) {
            return response()->json(['status' => true, 'message' => 'Successful unsubscribe']);
        }
        return response()->json(['status' => false, 'message' => 'Not successful unsubscribe'], 400);
    }

    public function currentSubscription(StripeService $stripeService): JsonResponse
    {
        $user = Auth::user();
        $subscription = Subscription::activeSubscription($user->id)->with('plan')->first();
        if ($user->stripeCustomerId) {
            $customerCard = $stripeService->retrieveCustomerCard($user->stripeCustomerId);
        }

        return response()->json([
            'subscription' => CurrentSubscriptionResource::make($subscription),
            'card' => [
                'brand' => $customerCard ? $customerCard->card->brand : '',
                'last4' => $customerCard ? $customerCard->card->last4 : '',
            ]
        ]);
    }

    public function webhook(Request $request, SubscriptionService $subscriptionService)
    {
        $data = $request->all();
        \Log::info('webhook request  ' . json_encode($data));
//        \Log::info('webhook request_amount  ' . json_encode($data['data']['object']['amount']));
//        \Log::info('webhook request_customer  ' . json_encode($data['data']['object']['customer']));
//        \Log::info('webhook request_status  ' . json_encode($data['data']['object']['status']));

        if (!empty($data['data']) && !empty($data['data']['object'])) {
            $customer = $data['data']['object']['customer'];
            $amount = $data['data']['object']['amount'];
            $status = $data['data']['object']['status'];
        }

        if (!isset($customer) || !isset($amount)) {
            \Log::info('Not found customer or amount or user');
            return response()->json(['status' => true, 'message' => 'Not found customer or amount or user']);
        }

        $user = User::query()
            ->where('stripeCustomerId', '=', $customer)
            ->first();

        if (!$user) {
            \Log::info('Not found user for customer ' . $customer);
            return response()->json(['status' => true, 'message' => 'Not found user for customer ' . $customer]);
        }

        if ($status == 'succeeded') {
            $subscriptionService->updateSubscriptionPeriod($user->id);
            \Log::info('Update subscription SUCCESS');
            return response()->json(['status' => true, 'message' => 'Subscription was updated']);
        }
    }
}
