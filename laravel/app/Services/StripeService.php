<?php

namespace App\Services;

use App\Models\Plan;
use Illuminate\Support\Facades\Log;
use Stripe\Customer;
use Stripe\Exception\ApiErrorException;
use Stripe\PaymentMethod;
use Stripe\StripeClient;
use Stripe\Subscription;

class StripeService
{
    public function __construct()
    {
        $this->stripe = new StripeClient(config('app.STRIPE_SECRET'));
    }

    public function subscribe(string $customerId, int $planId): bool|Subscription
    {
        $plan = Plan::query()->find($planId);
        try {
            return $this->stripe->subscriptions->create([
                'customer' => $customerId,
                'items' => [
                    [
                        'price_data' =>
                            [
                                'currency' => 'USD',
                                'product' => config('app.STRIPE_PRODUCT_ID'),
                                'recurring' =>
                                    [
                                        'interval' => 'day',
                                        'interval_count' => $plan->duration
                                    ],
                                'unit_amount_decimal' => $plan->price
                            ],
                    ],
                ],
            ]);
        } catch (ApiErrorException $e) {
            Log::error('Subscribe error: ' . $e->getMessage());
            return false;
        }
    }


    public function unsubscribe(string $subscriptionId): bool
    {
        try {
            return (bool)$this->stripe->subscriptions->cancel(
                $subscriptionId,
            );
        } catch (ApiErrorException $e) {
            Log::error('Unsubscribe error: ' . $e->getMessage());
            return false;
        }
    }

    public function createCustomer(string $email): bool|Customer
    {
        try {
            return $this->stripe->customers->create([
                'description' => $email,
            ]);
        } catch (ApiErrorException $e) {
            Log::error('createCustomer error: ' . $e->getMessage());
            return false;
        }
    }

    public function attachPaymentMethodToCustomer(string $paymentMethod, string $customer): PaymentMethod|bool
    {
        try {
            $paymentMethod = $this->stripe->paymentMethods->attach(
                $paymentMethod,
                ['customer' => $customer]
            );

            $this->stripe->customers->update(
                $customer,
                ['invoice_settings' => ['default_payment_method' => $paymentMethod]]
            );

            return $paymentMethod;
        } catch (ApiErrorException $e) {
            Log::error('attachPaymentMethodToCustomer error: ' . $e->getMessage());
            return false;
        }
    }

    public function retrieveCustomerCard(string $customerId): PaymentMethod|bool
    {
        try {
            $customer = $this->stripe->customers->retrieve($customerId, []);
            if (!$customer->invoice_settings->default_payment_method) {
                return false;
            }
            return $this->stripe->paymentMethods->retrieve($customer->invoice_settings->default_payment_method, []);
        } catch (ApiErrorException $e) {
            Log::error('retrieveCustomer error: ' . $e->getMessage());
            return false;
        }
    }
}
