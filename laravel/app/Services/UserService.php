<?php

namespace App\Services;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class UserService
{
    public function __construct(private StripeService $stripeService)
    {
    }

    public function register(string $email, string $password): bool
    {
        return (bool)User::query()->create([
            'email' => $email,
            'password' => $password,
            'roleId' => Role::getRoleIdUser()
        ]);
    }

    public function checkUserPassword(string $email, string $oldPassword): bool
    {
        return Auth::guard('web')->attempt(['email' => $email, 'password' => $oldPassword]);
    }

    public function changeUserPassword(string $email, string $password): bool
    {
        return (bool)User::query()->where('email', '=', $email)
            ->update(['password' => bcrypt($password)]);
    }

    public function getAll(array $data = []): Builder
    {
        $query = User::query()->where('roleId', '=', Role::getRoleIdUser());

        if (isset($data['search'])) {
            $query->where('email', 'like', "%{$data['search']}%");
        }

        if (isset($data['sortByPlan'])) {
            $query->whereHas('subscription', function ($q) use ($data) {
                $q->whereHas('plan', function ($x) use ($data) {
                    $x->where('name', '=', $data['sortByPlan']);
                });
            });
        }

        if (isset($data['sortBy']) && $data['sortBy'] === 'expiredAt') {
            $query
                ->select('users.*')
                ->join('subscriptions', 'subscriptions.userId', '=', 'users.id')
                ->orderBy('subscriptions.expiredAt', $data['sortType']);
        }

        if (isset($data['sortBy']) && $data['sortBy'] === 'subscription') {
            $query
                ->select('users.*')
                ->join('subscriptions', 'subscriptions.userId', '=', 'users.id')
                ->orderBy('subscriptions.deletedAt', $data['sortType']);  //todo need fix
        }

        if (isset($data['sortBy']) && in_array($data['sortBy'], ['id', 'email'])) {
            $query->orderBy($data['sortBy'], $data['sortType']);
        }

        return $query->latest();
    }

    public function addCustomerToUser(string $email, string $customerId): int
    {
        return User::query()
            ->where('email', '=', $email)
            ->update(['stripeCustomerId' => $customerId]);
    }

    public function updatePaymentMethod(int $userId, string $paymentMethod): bool
    {
        $customer = User::query()->find($userId)->stripeCustomerId;
        if (!$customer) return false;

        if ($this->stripeService->attachPaymentMethodToCustomer($paymentMethod, $customer)) {
            return (bool)User::query()
                ->where('id', '=', $userId)
                ->update(['stripePaymentMethod' => $paymentMethod]);
        }

        return false;
    }
}
