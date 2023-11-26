<?php

namespace App\Http\Requests\Plan;

use App\Models\Role;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdatePlanRequest extends FormRequest
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
            'name' => 'nullable|string',
            'description' => 'nullable|string',
            'price' => 'nullable|int|min:0',
            'duration' => 'nullable|int|min:0',
            'ads' => 'nullable|boolean',
        ];
    }
}
