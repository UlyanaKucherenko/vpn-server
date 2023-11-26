<?php

namespace App\Http\Requests\Server;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class IndexServerRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'search' => 'nullable|string',
            'sortBy' => ['nullable', 'string', Rule::in(['country', 'location', 'ip', 'isActive'])],
            'sortType' => ['required_with:sortBy', 'string', Rule::in(['ASC', 'DESC'])],
        ];
    }
}
