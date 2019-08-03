<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Despesa extends Model
{

    protected $fillable = [
        'total_liquidado',
        'total_empenhado',
        'total_pago',
        'data_inicio',
        'data_termino',
        'exercicio'
    ];

}
