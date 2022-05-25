<?php

namespace App\Repositories\Task;

use App\Repositories\BaseRepository;
use App\Models\Task;

class TaskRepository extends BaseRepository implements TaskRepositoryInterface
{
    public function getModel()
    {
        return Task::class;
    }

    public function getAllWithPaginate($per_page = null)
    {
        if ($per_page) {
            if ($per_page == 1) {
                return $this->model->first() ;
            }
            
            return $this->model->paginate($per_page);
        }
        return parent::getAll();
    }
}