<?php

namespace App\Http\Controllers;

use App\QueryFilters\DespesasFilters;
use App\Services\DespesasService;
use Illuminate\Http\Request;

class DespesaController extends Controller
{

    /**
     * @var DespesasService $despesasService
     */
    protected $despesasService;

    /**
     * DespesaController constructor.
     */
    public function __construct()
    {
        $this->despesasService = new DespesasService();
    }

    public function index(DespesasFilters $filters)
    {
        return $this->despesasService->listar($filters);
    }

    /**
     * @param Request $request
     * @return |null
     */
    public function importar(Request $request)
    {
        $params = $request->only(['dataInicio', 'dataTermino', 'exercicio']);
        $dados = $this->despesasService->buscar($params);
        return $this->despesasService->salvarSomatorios($dados);
    }

}
