<?php

namespace App\Models;

use App\Models\Traits\Picturable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Country extends Model
{
    use HasFactory, Picturable;

    public function servers(): HasMany
    {
        return $this->hasMany(Server::class, 'countryId', 'id');
    }
}
