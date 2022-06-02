<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/role', function () {
    $role = Role::create(['name' => 'writer']);
    $permission = Permission::create(['name' => 'edit articles']);
});

Route::get('/g', function () {
    $role = Role::find(1);
    $permission = Permission::find(1);
    // $role->givePermissionTo($permission);
    // $permission->assignRole($role);
});
Route::get('/u', function() {
    $user = User::find(8);
    // $user->givePermissionTo('edit articles');
    // $user->assignRole('writer');
    // dd($user->getRoleNames());
    // dd($all_roles_in_database = Role::all()->pluck('name'));
    dd($permissions = $user->getPermissionNames());
    dd($user->can('edit articles'));
});