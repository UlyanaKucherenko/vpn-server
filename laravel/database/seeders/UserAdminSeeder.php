<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = [
            'email' => 'admin@test.com',
            'roleId' => Role::getRoleIdAdmin(),
            'password' => bcrypt('password'),
            'created_at' => now(),
            'updated_at' => now(),
        ];

        $users = [
            [
                'email' => 'user1@test.com',
                'roleId' => Role::getRoleIdUser(),
                'password' => bcrypt('password'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'email' => 'user2@test.com',
                'roleId' => Role::getRoleIdUser(),
                'password' => bcrypt('password'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'email' => 'user3@test.com',
                'roleId' => Role::getRoleIdUser(),
                'password' => bcrypt('password'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('users')->insert($admin);
        DB::table('users')->insert($users);
    }
}
