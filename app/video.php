<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class video extends Model
{
       protected $fillable = [
        'nombre', 'descripcion', 'autor','formato','tipo_plano','archivo',
    ];
}
