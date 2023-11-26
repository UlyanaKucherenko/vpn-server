<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSettingsRequest extends FormRequest
{
    public function rules()
    {
        return [
            'allowNotification' => 'nullable|bool',
            'reconnect'         => 'nullable|bool',
        ];
    }
}
