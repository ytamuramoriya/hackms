<?php

namespace App\Http\Controllers;

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
     * @param Request $request
     * @return bool
     */
    public function importar(Request $request)
    {
        return $this->receitasService->importar($request);
    }

}
