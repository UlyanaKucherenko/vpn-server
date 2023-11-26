<?php

namespace App\Http\Requests\User;

use App\Models\Role;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class IndexUsersRequest extends FormRequest
{
    public function authorize()
    {
        return Auth::user()->role->name === Role::ADMIN;
    }

    public function rules()
    {
        return [
            'search' => 'nullable|string',

            'sortByPlan' => 'nullable|string|exists:App\Models\Plan,name',
            'sortBy' => ['nullable', 'string', Rule::in(['email', 'id', 'expiredAt', 'subscription'])],
            'sortType' => ['required_with:sortBy', 'string', Rule::in(['ASC', 'DESC'])],
        ];
    }
}
