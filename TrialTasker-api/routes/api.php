<?php

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

//typePerson
Route::group([
    'prefix' => 'type-persons',
    'controller' => TypePersonController::class,
    'middleware' => ['auth:sanctum', 'verified']
], function () {
    Route::get('/', 'index');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});

// users
route::group([
    'prefix'=> 'user',
    'controller'=> UserController::class,
],function(){
    Route::get('/', 'index');
    Route::post('/store', 'store');
    Route::put('/update/{id}', 'update');
    Route::delete('/destroy/{id}', 'destroy');
});
