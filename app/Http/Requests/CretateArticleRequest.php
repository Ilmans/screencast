<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;

class CretateArticleRequest extends FormRequest
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
            'image' => ['required', 'image', 'max:1024'],
            'synopsis' => ['required', 'string', 'min:15', 'max:255'],
            'body' => ['required', 'string'],
            'topic' => [
                'required',
                'array',
                function ($attribute, $value, $fail) {
                    if (count($value) > 3) {
                        $fail('You can only select 3 topics');
                    }
                    $existingTopics = DB::table('topics')->pluck('id')->toArray();
                    foreach ($value as $id) {
                        if (!in_array($id, $existingTopics)) {
                            $fail('One of the selected topics is not valid');
                        }
                    }
                }
            ],

        ];
    }
}
