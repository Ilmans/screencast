<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Services\ManageUserService;
use App\Models\User;
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
        $users = $this->manageUserService
            ->sort()
            ->search()
            ->allUsers();
        return inertia('Admin/User/Index', compact('users'));
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            // username max 8,no space min 6 ,unique except this user
            'username' =>
                'required|string|max:8|regex:/^\S*$/u|unique:users,username,' .
                $user->id,
            'name' => 'required|string|max:255',
            'email' =>
                'required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'nullable|string|min:8',
        ]);
        $this->manageUserService->update($request, $user);
        return redirect()
            ->back()
            ->with('success', 'User updated successfully');
    }

    public function destroy(User $user)
    {
        $this->manageUserService->delete($user);
        return redirect()
            ->back()
            ->with('success', 'User deleted successfully');
    }
}
