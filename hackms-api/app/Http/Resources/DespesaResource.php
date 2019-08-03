<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DespesaResource extends JsonResource
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
            'total_liquidado' => $this->total_liquidado,
            'total_empenhado' => $this->total_empenhado,
            'total_pago' => $this->total_pago,
            'data_inicio' => $this->data_inicio,
            'data_termino' => $this->data_termino,
            'exercicio' => $this->exercicio
        ];
    }
}
