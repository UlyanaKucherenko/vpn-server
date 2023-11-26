<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleTableSeeder::class,
            UserAdminSeeder::class,
            UserTableSeeder::class,
            PlanSeeder::class,
            SubscriptionSeeder::class,
            CountriesSeeder::class,
            ServerSeeder::class,
        ]);
    }
}
