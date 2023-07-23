<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ListUserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
     
        return [
            'id' => $this->id,
            'username' => $this->username, // 'username' => $this->username ?? 'N/A
            'name' => $this->name, 
            'email' => $this->email,
            'isHaveActiveSubscription' => $this->isHaveActiveSubscription(),
            'created_at' => $this->created_at,
            'articles_count' => $this->articles_count ?? 'N/A',
        ];
    }
}
