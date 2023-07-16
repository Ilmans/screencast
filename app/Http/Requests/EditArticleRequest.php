<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class EditArticleRequest extends FormRequest
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

        $currentArticle = $this->route('article');
        return [
            'title' => [
                'required',
                'string',
                'max:255',
                Rule::unique('articles')->ignore($currentArticle, 'slug')
            ],
            'synopsis' => 'required|string|max:255',
            'topic' => [
                'required',
                'array',
                function ($attribute, $value, $fail) {
                    if (count($value) > 3) {
                        $fail('You can only select 3 topics');
                    }
                    $existingTopics = DB::table('topics')->pluck('id')->toArray();
                    foreach ($value as $selectedTopicId) {
                        if (!in_array($selectedTopicId, $existingTopics)) {
                            $fail('One of the selected topics is not valid');
                        }
                    }
                }
            ],
            'body' => 'required|string',

        ];
    }
}
