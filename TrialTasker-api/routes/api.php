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
use App\Models\PersonStage;
use App\Models\Stage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Auth;


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
//-------------------------auth-------------------------//
Route::post('/login', [AuthenticatedSessionController::class, 'store'])
                ->middleware('guest')
                ->name('login');
Route::post('/register', [RegisteredUserController::class, 'store'])
                ->middleware('guest')
                ->name('register');
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
                ->middleware('auth')
                ->name('logout');

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
                ->middleware('guest')
                ->name('password.email');

Route::post('/reset-password', [NewPasswordController::class, 'store'])
                ->middleware('guest')
                ->name('password.store');

Route::get('/verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['auth', 'signed', 'throttle:6,1'])
                ->name('verification.verify');

Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware(['auth', 'throttle:6,1'])
                ->name('verification.send');
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

// casos del usuario
Route::get('/casesActive',[CasoController::class, 'casesActive']);
Route::get('/casesInactive',[CasoController::class, 'casesInactive']);
Route::get('/infoCase/{id}',[StageController::class, 'infoCase']);
