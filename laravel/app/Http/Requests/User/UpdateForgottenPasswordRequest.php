<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateForgottenPasswordRequest extends FormRequest
{

    public function rules()
    {
        return [
            'email' => 'required|email|exists:App\Models\User,email',
            'hash'  => 'required|string',
            'password' => 'required|string|min:8|max:32'
        ];
    }
}
