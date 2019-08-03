<?php

namespace App\Imports;

use App\Models\FonteRecurso;
use App\Models\Receita;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithCustomCsvSettings;

class ReceitasImport implements ToModel, WithCustomCsvSettings
{

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        $fonteRecurso = FonteRecurso::firstOrCreate(['descricao' => $row[0]]);

        return new Receita([
            'fonte_recurso_id' => $fonteRecurso->id,
            'valor_previsto' => $row[1],
            'valor_arrecadado' => $row[2],
            'mes' => request()->get('mes'),
            'ano' => request()->get('ano')
        ]);
    }

    /**
     * @return array
     */
    public function getCsvSettings(): array
    {
        return [
            'delimiter' => ';'
        ];
    }


}
