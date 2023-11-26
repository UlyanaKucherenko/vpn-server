<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServerSelect extends Model
{
    use HasFactory;

    protected $fillable = ['userId', 'serverId'];

    public $timestamps = false;

    public static function isSelectedServer(int $userId, int $serverId): bool
    {
        return (bool)self::query()
            ->where('userId', '=', $userId)
            ->where('serverId', '=', $serverId)
            ->first();
    }
}
