<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Services\ManageUserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    
    private $manageUserService;

    public function __construct(ManageUserService $manageUserService) 
    {
        $this->manageUserService = $manageUserService;
    }

    public function index(Request $request) 
    {
        $users = $this->manageUserService->allUsers();
        return inertia('Admin/User/Index',compact('users'));
    }
}
