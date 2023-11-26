<?php

namespace App\Services;

use App\Models\Country;
use App\Models\Server;
use App\Models\ServerSelect;
use App\Models\ServerUse;
use Illuminate\Database\Eloquent\Builder;

class ServerService
{
    public function getAll(array $data = []): Builder
    {
        $query = Server::query();

        if (isset($data['search'])) {
            $query
                ->orWhere('location', 'like', "%{$data['search']}%")
                ->orWhere('ip', 'like', "%{$data['search']}%")
                ->orWhereHas('country', function ($q) use ($data) {
                    $q->where('name', 'like', "%{$data['search']}%");
                });
        }

        if (isset($data['sortBy']) && $data['sortBy'] === 'country') {
            $query
                ->select('servers.*')
                ->join('countries', 'countries.id', '=', 'servers.countryId')
                ->orderBy('countries.name', $data['sortType']);
        }

        if (isset($data['sortBy']) && $data['sortBy'] != 'country') {
            $query->orderBy($data['sortBy'], $data['sortType']);
        }

        return $query->latest();
    }

    public function getAllForUser(): Builder
    {
        return Country::query()
            ->whereHas('servers', function ($q) {
                $q->where('isActive', '=', 1);
            })
            ->orderBy('name');
    }

    public function getSelectedForUser(int $userId): Builder
    {
        $selectedServerIds = ServerSelect::query()
            ->where('userId', '=', $userId)
            ->pluck('serverId')->values()->toArray();

        return Server::query()->whereIn('id', $selectedServerIds);
    }

    public function getRecentForUser(int $userId): Builder
    {
        $recentServerIds = ServerUse::query()
            ->where('userId', '=', $userId)
            ->pluck('serverId')->values()->toArray();

        return Server::query()->whereIn('id', $recentServerIds);
    }

    public function storeServer(array $data): bool
    {
        return (bool)Server::query()->create($data);
    }

    public function updateServer(int $serverId, array $data): bool
    {
        return (bool)Server::query()->where('id', '=', $serverId)->update($data);
    }

    public function connect(int $serverId, int $userId): bool
    {
        $this->disconnect($userId);

        return (bool)ServerUse::query()->create([
            'userId' => $userId,
            'serverId' => $serverId
        ]);
    }

    public function disconnect(int $userId): bool
    {
        return (bool)ServerUse::query()->where('userId', '=', $userId)
            ->whereNull('endedAt')
            ->update(['endedAt' => now()]);
    }

    public function selectServer(int $userId, int $serverId): bool|string
    {
        $selectedServer = ServerSelect::query()->where([
            ['userId', '=', $userId],
            ['serverId', '=', $serverId]
        ])->first();

        if ($selectedServer) {
            $selectedServer->delete();
            return 'not selected';
        }

        if (ServerSelect::query()->create([
            'userId' => $userId,
            'serverId' => $serverId
        ])) {
            return 'selected';
        }

        return false;
    }
}
