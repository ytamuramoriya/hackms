<?php


namespace App\QueryFilters;


use Cerbero\QueryFilters\QueryFilters;

class ReceitasFilters extends QueryFilters
{

    public function fonteRecuroId($id)
    {
        $this->query->where('fonte_recurso_id', '=', $id);
    }

    public function mes($mes)
    {
        $this->query->where('mes', '=', $mes);
    }

    public function ano($ano)
    {
        $this->query->where('ano', '=', $ano);
    }

}