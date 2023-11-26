<?php

namespace App\Http\Resources;

use App\Http\Resources\Picture\PictureResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CountryServersResource extends JsonResource
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        $resource = $this->resource;

        return [
            'id' => $resource->id,
            'name' => $resource->name,
            'iso_code' => $resource->iso_code,
            'picture' => PictureResource::make($resource->picture),
            'servers' => ServerShortResource::collection($resource->servers),
        ];
    }
}
