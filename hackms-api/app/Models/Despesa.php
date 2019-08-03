<?php

namespace App\Models;

use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Model;

class Despesa extends Model
{

    use FiltersRecords;

    protected $fillable = [
        'total_liquidado',
        'total_empenhado',
        'total_pago',
        'data_inicio',
        'data_termino',
        'exercicio'
    ];

}
