<?php

namespace App\Http\Middleware;

use App\Models\Role;
use Closure;
use Illuminate\Support\Facades\Auth;

class CheckRoleAdminGuard
{
    /**
     * @param $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next): mixed
    {
        if (Auth::user()->role->name === Role::ADMIN) {
            return $next($request);
        }
        return response()->json(['error' => 'not enough permissions'], 403);
    }
}
