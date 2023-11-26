<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePasswordRequest extends FormRequest
{
    public function rules()
    {
        return [
            'oldPassword' => 'required|string|min:8|max:32',
            'password'    => 'required|string|min:8|max:32',
        ];
    }
}
