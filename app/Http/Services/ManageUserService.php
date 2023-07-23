<?php
namespace App\Http\Services;

use App\Http\Resources\ListUserResource;
use App\Models\User;

class ManageUserService 

{

    public function allUsers() 
    {
        return ListUserResource::collection(User::withCount('articles')->paginate(10));
    }
}
?>