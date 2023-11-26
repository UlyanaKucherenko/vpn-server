<?php

namespace Database\Seeders;

use App\Models\Plan;
use App\Models\Role;
use App\Models\Subscription;
use App\Models\User;
use Illuminate\Database\Seeder;

class SubscriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userIds = User::query()->where('roleId', '=', Role::getRoleIdUser())
            ->pluck('id')->values()->toArray();

        $plans = Plan::query()->get();

        foreach ($userIds as $userId) {
            $plan = $plans->random();
            Subscription::query()->create([
                'userId' => $userId,
                'planId' => $plan->id,
                'expiredAt' => $plan->duration ? now()->addDays($plan->duration) : null,
            ]);
        }
    }
}
