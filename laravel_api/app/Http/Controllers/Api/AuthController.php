<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Models\User;
use Validator;

class AuthController extends BaseController
{
    public function login(Request $request)
    {
        $credentials = [
            'email'     => $request->email, 
            'password'  => $request->password
        ];

        if (Auth::attempt($credentials)) {
            $auth = Auth::user();
            $success['token']   = $auth->createToken('LaravelSanctumAuth')->plainTextToken;
            $success['name']    = $auth->name;

            return $this->handleResponse($success, 'User logged-in!');
        } 

        return $this->handleError('Unauthorised.', ['error'=>'Unauthorised']);
    }

    public function register(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name'              => 'required',
            'email'             => 'required|unique:users|email',
            'password'          => 'required',
            'confirm_password'  => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return $this->handleError($validator->errors());
        }

        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] = $user->createToken('LaravelSanctumAuth')->plainTextToken;
        $success['name'] = $user->name;

        return $this->handleResponse($success, 'User successfully registered!');
    }
}
