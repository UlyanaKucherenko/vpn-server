<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $plans = [
            [
                'name' => 'Free',
                'description' => 'Test description!!! If you want to try out the service before committing, ShipStation offers a 30-day free trial. You should take advantage of this free trial to learn about the entire capability of the platform.',
                'price' => null,
                'duration' => null,
                'ads' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Basic',
                'description' => 'Test description!!! If you want to try out the service before committing, ShipStation offers a 30-day free trial. You should take advantage of this free trial to learn about the entire capability of the platform.',
                'price' => 300,
                'duration' => 30,
                'ads' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Premium',
                'description' => 'Test description!!! If you want to try out the service before committing, ShipStation offers a 30-day free trial. You should take advantage of this free trial to learn about the entire capability of the platform.',
                'price' => 500,
                'duration' => 30,
                'ads' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Gold',
                'description' => 'Test description!!! If you want to try out the service before committing, ShipStation offers a 30-day free trial. You should take advantage of this free trial to learn about the entire capability of the platform.',
                'price' => 5000,
                'duration' => 365,
                'ads' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('plans')->insert($plans);
    }
}
