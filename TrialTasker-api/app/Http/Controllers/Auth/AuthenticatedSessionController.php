<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): JsonResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        // si el usuario selecciona recordar sesión, no expirará el token de autenticación 
        // si no, expirará en 60 minutos
        
        if($request->remember_me) {
            $token = $request->user()->createToken('auth_token')->plainTextToken;
            // crea la cookie con el token de autenticación
            $cookie = cookie('auth_token', $token, 60 * 24 * 7, null,null,null,false); // 7 días

        } else {
            $token = $request->user()->createToken('auth_token', ['expires_at' => now()->addMinutes(60)])->plainTextToken;
            // crea la cookie con el token de autenticación
            $cookie = cookie('auth_token', $token, 60, null,null,null,false); // 60 minutos
        }

        return response()->json( [
            'user' => auth()->user()
        ])->withCookie($cookie);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        // elimina la cookie con el token de autenticación
        $cookie = cookie('auth_token', '', -1);

        return response()->noContent()->withCookie($cookie);
    }
}
