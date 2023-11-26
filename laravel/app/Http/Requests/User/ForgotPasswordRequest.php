<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class ForgotPasswordRequest extends FormRequest
{

    public function rules()
    {
        return [
            'email' => 'required|email|exists:App\Models\User,email',
        ];
    }
}
