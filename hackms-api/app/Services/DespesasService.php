<?php


namespace App\Services;


use App\Models\Despesa;
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

}