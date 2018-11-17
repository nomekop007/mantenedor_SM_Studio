<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class fotografia extends Model
{
         protected $fillable = [
        'nombre', 'descripcion', 'autor','tipo_plano','archivo',
    ];
}
