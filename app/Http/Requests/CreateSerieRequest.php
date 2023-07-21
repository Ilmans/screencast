<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateSerieRequest extends FormRequest
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
        return [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'thumbnail' => ['required', 'image'],
            'topic' => ['required', 'array', function ($attribute, $value, $fail) {
              
                if (count($value) > 4) {
                    $fail('You can only select up to 4 topics');
                }
            }],
            'topic.*' => ['required', 'integer', 'exists:topics,id'],
        ];
    }
}
