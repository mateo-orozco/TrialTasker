<?php

use App\Http\Controllers\CasoController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\PersonController;
use App\Http\Controllers\PersonStageController;
use App\Http\Controllers\StageController;
use App\Http\Controllers\TypePersonController;
use App\Http\Controllers\TypeStageController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;
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

// ------------------------dashboard------------------------


Route::middleware(['auth:sanctum', 'authCookie','logUserLogin'])->get('/user', function (Request $request) {
    return $request->user();
});

// ------------------------dashboard----------------------------//
Route::group([
    'prefix' => 'dashboard',
    'controller' => DashboardController::class,
    'middleware' => ['auth:sanctum', 'authCookie']
], function () {
    Route::get('/users-week', 'getUsersForWeek');
    Route::get('/sessions', 'getSessions');
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

//type_stage
route::group([
    'prefix'=>'typeStages',
    'controller' => TypeStageController::class,
],function(){
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});


//stages
route::group([
    'prefix'=>'stages',
    'controller' => StageController::class,
],function(){
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});

// personStage
route::group([
    'prefix'=>'personStages',
    'controller' => PersonStageController::class,
],function(){
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});

// files
route::group([
    'prefix'=>'files',
    'controller' => FileController::class,
],function(){
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});



// ------------------------user------------------------

Route::get('userCases/{id}',[UserController::class, 'userCases']);
Route::get('userCases/stage/${id}',[StageController::class, '']);