<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DemoMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        if (!env('DEMO_MODE')) {
            return $next($request);
        }

        if ($request->method() === 'POST' || $request->method() === 'PUT' || $request->method() === 'DELETE') {
            return back()->with('error', "Tidak diizinkan operasi admin di demo.");
        }
        return $next($request);
    }
}
