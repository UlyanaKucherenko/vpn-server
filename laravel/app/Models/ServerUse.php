<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ServerUse extends Model
{
    use HasFactory;

    protected $fillable = ['userId', 'serverId', 'startedAt', 'endedAt'];

    public $timestamps = false;

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->startedAt = now();
        });
    }

    public function server(): HasOne
    {
        return $this->hasOne(Server::class, 'id', 'serverId');
    }

    public static function lastServer(int $userId)
    {
        $lastServer = self::query()
            ->where('userId', '=', $userId)
            ->orderByDesc('startedAt')
            ->first();

        return ($lastServer)
            ? $lastServer->server
            : Server::query()->inRandomOrder()->first();
    }

    public static function isConnectedToServer(int $userId, int $serverId): bool
    {
        return (bool)self::query()
            ->where('userId', '=', $userId)
            ->where('serverId', '=', $serverId)
            ->whereDate('startedAt', '<', now()->format('Y-m-d H:i:s'))
            ->whereNull('endedAt')
            ->first();
    }
}
