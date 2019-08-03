<?php

namespace App\Models;

use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Model;

class Receita extends Model
{

    use FiltersRecords;

    /**
     * @var array
     */
    protected $fillable = [
        'fonte_recurso_id',
        'valor_previsto',
        'valor_arrecadado',
        'mes',
        'ano'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function fonte_recurso()
    {
        return $this->belongsTo(FonteRecurso::class);
    }

    /**
     * @param $value
     * @return mixed
     */
    public function setValorPrevistoAttribute($value)
    {
        $this->attributes['valor_previsto'] = str_replace(',', '.', $value);
    }

    /**
     * @param $value
     * @return mixed
     */
    public function setValorArrecadadoAttribute($value)
    {
        $this->attributes['valor_arrecadado'] = str_replace(',', '.', $value);
    }
}
