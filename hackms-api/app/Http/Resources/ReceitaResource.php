<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReceitaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'fonte_recurso_id' => $this->fonte_recurso_id,
            'valor_previsto' => $this->valor_previsto,
            'valor_arrecadado' => $this->valor_arrecadado,
            'mes' => $this->mes,
            'ano' => $this->ano
        ];
    }
}
