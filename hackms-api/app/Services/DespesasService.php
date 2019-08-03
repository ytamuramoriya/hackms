<?php


namespace App\Services;


use App\Http\Resources\DespesaResource;
use App\Models\Despesa;
use App\QueryFilters\DespesasFilters;
use GuzzleHttp\Client;

class DespesasService
{

    protected $URL = 'http://www.transparencia.ms.gov.br/Despesa/GetDespesasByUnidadesGestoras';

    /**
     * @param array $params
     * @return mixed
     */
    public function buscar(array $params)
    {
        $client = new Client();
        $request = $client->post($this->URL, [
            'form_params' => $params
        ]);
        $response = $request->getBody()->getContents();
        $dados = json_decode($response);

        $dados->dataInicio = array_key_exists('dataInicio', $params) ? $params['dataInicio'] : null;
        $dados->dataTermino = array_key_exists('dataTermino', $params) ? $params['dataTermino'] : null;
        $dados->exercicio = array_key_exists('exercicio', $params) ? $params['exercicio'] : null;

        return $dados;
    }

    public function salvarSomatorios($dados)
    {
        $objeto = Despesa::create([
            'total_liquidado' => $dados->TotalLiquidado,
            'total_empenhado' => $dados->TotalEmpenhado,
            'total_pago' => $dados->TotalPago,
            'data_inicio' => $dados->dataInicio,
            'data_termino' => $dados->dataTermino,
            'exercicio' => $dados->exercicio
        ]);

        if(!empty($objeto))
        {
            return $objeto;
        }
        return null;
    }

    /**
     * @param $filtros
     * @return mixed
     */
    public function listar(DespesasFilters $filtros)
    {
        $despesas = Despesa::filterBy($filtros)->get();

        if($despesas->count() > 0)
        {
            return DespesaResource::collection($despesas);
        }
        return response()->json('Nenhum registro foi encontrado', 404);
    }

}