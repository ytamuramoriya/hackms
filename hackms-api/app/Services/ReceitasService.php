<?php


namespace App\Services;


use App\Imports\ReceitasImport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ReceitasService
{

    /**
     * @param Request $request
     */
    public function importar(Request $request)
    {
        $result = Excel::import(
            new ReceitasImport,
            request()->file('filename')
        );
        return true;
    }

}