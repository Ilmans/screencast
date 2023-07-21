<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateTopicRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {

        if ($this->method() === 'PUT') {
            return [
                'name' => 'required|string|max:255|unique:topics,name,' . $this->topic->id,
                'image' => 'nullable|image',
                'type' => 'required|in:serie,article',
                'description' => 'nullable|string|max:255',
            ];
        }
        return [
            'name' => 'required|unique:topics|string|max:255',
            'image' => 'required|image',
            'type' => 'required|in:serie,article',
            'description' => 'nullable|string|max:255',
        ];
    }
}
