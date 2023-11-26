<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ServerResource extends JsonResource
{
    public function toArray($request)
    {
        $server = $this->resource;
        return [
            'id' => $server->id,
            'location' => $server->location,
            'ip' => $server->ip,
            'isActive' => (bool)$server->isActive,
            'country' => CountryResource::make($server->country),
        ];
    }
}
