<?php

namespace App\Http\Requests\File;

use Illuminate\Foundation\Http\FormRequest;


class FileRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'file' => 'required|file',
        ];
    }
}
