<?php

namespace Database\Factories;

use App\Models\Country;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Server>
 */
class ServerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $countryIds = Country::query()->pluck('id')->values()->toArray();
        return [
            'countryId' => $this->faker->randomElement($countryIds),
            'location' => $this->faker->country,
            'ip' => $this->faker->ipv4,
            'isActive' => $this->faker->randomElement([true, false]),
        ];
    }
}
