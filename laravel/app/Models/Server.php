<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Server extends Model
{
    use HasFactory;

    protected $fillable = ['countryId', 'location', 'ip', 'isActive'];

    public function country(): HasOne
    {
        return $this->hasOne(Country::class, 'id', 'countryId');
    }
}
