<?php

namespace App\Http\Controllers;

use App\QueryFilters\ReceitasFilters;
use App\Services\ReceitasService;
use Illuminate\Http\Request;

class ReceitaController extends Controller
{

    /**
     * @var ReceitasService $receitasService
     */
    private $receitasService;

    /**
     * ReceitaController constructor.
     * @param $receitasService
     */
    public function __construct()
    {
        $this->receitasService = new ReceitasService();
    }

    /**
     * @param ReceitasFilters $filters
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(ReceitasFilters $filters)
    {
        return $this->receitasService->listar($filters);
    }

    /**
     * @param Request $request
     * @return bool
     */
    public function importar(Request $request)
    {
        return $this->receitasService->importar($request);
    }

}
