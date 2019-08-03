<?php


namespace App\Services;


use App\Http\Resources\ReceitaResource;
use App\Imports\ReceitasImport;
use App\Models\Receita;
use App\QueryFilters\ReceitasFilters;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ReceitasService
{

    /**
     * @param Request $request
     * @return bool
     */
    public function importar(Request $request)
    {
        $result = Excel::import(
            new ReceitasImport,
            request()->file('filename')
        );
        return true;
    }

    /**
     * @param ReceitasFilters $filters
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function listar(ReceitasFilters $filters)
    {
        $receitas = Receita::filterBy($filters)->get();

        if($receitas->count() > 0)
        {
            return ReceitaResource::collection($receitas);
        }
        return response()->json('Nenhum registro foi encontrado', 404);
    }

}