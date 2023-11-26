<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePaymentMethodRequest extends FormRequest
{
    public function rules()
    {
        return [
            'paymentMethod' => 'required|string',
        ];
    }
}
