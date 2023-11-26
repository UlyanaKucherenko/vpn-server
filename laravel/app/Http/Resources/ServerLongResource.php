<?php

namespace App\Http\Resources;

use App\Models\ServerSelect;
use App\Models\ServerUse;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class ServerLongResource extends JsonResource
{
    public function toArray($request)
    {
        $server = $this->resource;
        return [
            'id' => $server->id,
            'location' => $server->location,
            'ip' => $server->ip,
            'country' => CountryResource::make($server->country),
            'connected' => $this->isConnected(Auth::id(), $server->id),
            'selected' => $this->isSelectedServer(Auth::id(), $server->id),
        ];
    }

    private function isConnected(int $userId, int $serverId): bool
    {
        return ServerUse::isConnectedToServer($userId, $serverId);
    }

    private function isSelectedServer(int $userId, int $serverId): bool
    {
        return ServerSelect::isSelectedServer($userId, $serverId);
    }
}
