<?php
namespace App\Http\Services;

use App\Http\Resources\ListUserResource;
use App\Models\User;

class ManageUserService 

{
    private $user;

    public function __construct() 
    {
        $this->user = User::query();
    }


    public function search () 
    {
        $request = request();
        $request->whenFilled('search', function($search) {
            $this->user->where('name', 'like', "%{$search}%")
            ->orWhere('email', 'like', "%{$search}%");
        });
        return $this;
    }

    public function sort () 
    {
        $request = request();

        if ($request->sort) {
           
           switch ($request->sort) {
               case 'latest':
                    $this->user->orderBy('created_at', 'desc');
                   break;
               case 'oldest':
                    $this->user->orderBy('created_at', 'asc');
                   break;
               case 'subscription':
                    $this->user->leftJoin('subscriptions', 'subscriptions.user_id', '=', 'users.id')
                        ->orderBy('subscriptions.ends_at', 'desc');
                    
                   break;
               default:
                   $this->user->latest();
                   break;
           }
        } else {
            $this->user->latest();
        }
        
        
        return $this;
    }

    public function allUsers() 
    {
        return ListUserResource::collection($this->user->withCount('articles')->paginate(10));
    }



    public function update ($request,$user)
    {
        $password = $request->password ? bcrypt($request->password) : $user->password;
        $user->update([
            'username' => $request->username,
            'name' => $request->name,
            'email' => $request->email,
            'password' => $password
        ]);
    }

    public function delete ($user)
    {
        $user->delete();

    }
}
?>