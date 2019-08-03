<?php

namespace App\Http\Controllers;

use App\Services\DespesasService;
use Illuminate\Http\Request;

class DespesaController extends Controller
{

    protected $despesasService;

    /**
     * DespesaController constructor.
     */
    public function __construct()
    {
        $this->despesasService = new DespesasService();
    }


    public function importar(Request $request)
    {
        $params = $request->only(['dataInicio', 'dataTermino', 'exercicio']);
        $dados = $this->despesasService->buscar($params);
        return $this->despesasService->salvarSomatorios($dados);
    }

}
