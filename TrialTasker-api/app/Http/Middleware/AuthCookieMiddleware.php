<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthCookieMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(auth()->check()){
            $token = auth()->user()->createToken('auth_token')->plainTextToken;
            $cookie = cookie('auth_token', $token,120, null,null,null,false);
            return $next($request)->withCookie($cookie);
        }else{
            $cookie = cookie('auth_token', '', -1);
            return $next($request);
        }
        return $next($request);
    }
}
