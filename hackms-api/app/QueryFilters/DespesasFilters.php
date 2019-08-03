<?php


namespace App\QueryFilters;


use Cerbero\QueryFilters\QueryFilters;

class DespesasFilters extends QueryFilters
{

    public function dataInicio($data)
    {
        $this->query->where('data_inicio', '>=', $data);
    }

    public function dataTermino($data)
    {
        $this->query->where('data_termino', '<=', $data);
    }

    public function exercicio($ano)
    {
        $this->query->where('exercicio', '<=', $ano);
    }

    public function totalEmpenhadoDe($total)
    {
        $this->query->where('total_empenhado', '>=', $total);
    }

    public function totalEmpenhadoAte($total)
    {
        $this->query->where('total_empenhado', '<=', $total);
    }

}