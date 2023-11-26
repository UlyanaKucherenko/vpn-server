<?php

namespace App\Http\Resources\Picture;

use App\Models\Picture;
use Illuminate\{Http\Resources\Json\JsonResource, Support\Facades\Storage};


class PictureResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        /** @var Picture $resource */
        $resource = $this->resource;
        return [
            'id'        => $resource->id,
            'image'     => url(Storage::url($resource->path)),
            'thumbnail' => url(Storage::url($resource->thumbnail)),
        ];
    }
}
