<?php

namespace Database\Seeders;

use App\Models\Server;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ServerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Server::factory(10)->create();

        $server = Server::query()->first();
        $country = $server->country;

        for ($i = 0; $i < 5; $i++) {
            Server::query()->create([
                'countryId' => $country->id,
                'location' => Str::random(10),
                'ip' => long2ip(rand(0, 4294967295)),
                'isActive' => true,
            ]);
        }
    }
}
