<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Str;

class AcceptJsonAlways
{
    /**
     * Handle an incoming request.
     *
     * @param $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $request->headers->set('Accept', 'application/json');
        request()->attributes->set('requestId', Str::uuid()->toString());

        return $next($request);
    }
}
