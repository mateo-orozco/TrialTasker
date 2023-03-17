<?php

use App\Http\Controllers\CasoController;
use App\Http\Controllers\PersonController;
use App\Http\Controllers\TypePersonController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum', 'authCookie'])->get('/user', function (Request $request) {
    return $request->user();
});

//typePerson
Route::group([
    'prefix' => 'type-persons',
    'controller' => TypePersonController::class,
    'middleware' => ['auth:sanctum', 'verified', 'authCookie']
], function () {
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});

// users
route::group([
    'prefix'=> 'users',
    'controller'=> UserController::class,
    'middleware' => ['auth:sanctum', 'verified', 'authCookie']
],function(){
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});

// person
route::group([
    'prefix'=>'persons',
    'controller' => PersonController::class,
],function(){
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});

// caso
route::group([
    'prefix'=>'cases',
    'controller' => CasoController::class,
],function(){
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});