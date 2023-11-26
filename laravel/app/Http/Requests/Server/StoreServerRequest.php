<?php

namespace App\Http\Requests\Server;

use App\Models\Role;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreServerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->role->name === Role::ADMIN;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'countryId' => 'required|int|exists:App\Models\Country,id',
            'location' => 'required|string',
            'ip' => 'required|string',
            'isActive' => 'required|boolean',
        ];
    }
}
