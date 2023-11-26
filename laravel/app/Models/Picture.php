<?php

namespace App\Models;

use App\Models\Traits\Picturable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
    use HasFactory, Picturable;

    protected $fillable = [ 'name', 'path', 'thumbnail' ];
}
