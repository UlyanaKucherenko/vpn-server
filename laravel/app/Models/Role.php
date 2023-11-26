<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    public const ADMIN = 'admin';
    public const USER = 'user';

    public static function getRoleIdAdmin()
    {
        return Role::query()->where('name', '=', Role::ADMIN)->first()->id;
    }

    public static function getRoleIdUser()
    {
        return Role::query()->where('name', '=', Role::USER)->first()->id;
    }
}
