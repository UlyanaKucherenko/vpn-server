<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SocialiteLoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'provider' => ['required', 'string', Rule::in($this->providersList())],
            'accessToken' => 'required|string',
            'email' => 'nullable|string|email'
        ];
    }

    private function providersList(): array
    {
        return ['google.com', 'apple.com'];
    }
}
