<?php


namespace App\Services;


use App\Imports\ReceitasImport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ReceitasService
{

    public function importar(Request $request)
    {
        $result = Excel::import(
            new ReceitasImport,
            request()->file('filename')
        );
    }

}