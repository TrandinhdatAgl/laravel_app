<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;
use Validator;
use App\Http\Controllers\Api\BaseController as BaseController;

class TaskController extends BaseController
{
    public function index()
    {
        $tasks = Task::paginate(config('api.page.per_page'));
        
        return $this->handleResponse(TaskResource::collection($tasks)->response()->getData(), 'Tasks have been retrieved!');
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,  [
            'name' => 'required',
            'details' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->handleError($validator->errors());
        }

        $task = Task::create($input);

        return $this->handleResponse(new TaskResource($task), 'Task created!');
    }

    public function show($id)
    {
        $task = Task::find($id);
        if (is_null($task)) {
            return $this->handleError('Task not found!');
        }

        return $this->handleResponse(new TaskResource($task), 'Task retrieved.');
    }

    public function update(Request $request, Task $task)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            'details' => 'required'
        ]);

        if($validator->fails()){
            return $this->handleError($validator->errors());       
        }

        $task->name = $input['name'];
        $task->details = $input['details'];
        $task->save();

        return $this->handleResponse(new TaskResource($task), 'Task successfully updated!');
    }

    public function destroy(Task $task)
    {
        $task->delete();

        return $this->handleResponse([], 'Task deleted!');
    }
}
