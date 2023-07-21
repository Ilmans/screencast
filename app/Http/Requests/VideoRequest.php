<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VideoRequest extends FormRequest
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
        if ( $this->method() === 'PUT' ) {
           
            return [
                'title' => 'required|string|max:255|unique:videos,title,'.$this->video->id,
                'description' => 'required|string',
                'unique_video_id' => 'required|string|max:255|unique:videos,unique_video_id,'.$this->video->id,
                'is_free' => 'required|boolean',
            ];
        }
    }
}
