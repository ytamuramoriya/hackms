<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FonteRecurso extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'descricao'
    ];

    /**
     * Relations
     * HasMany Receita
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function receitas()
    {
        return $this->hasMany(Receita::class);
    }

}
