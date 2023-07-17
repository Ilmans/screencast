<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{


    public function index(Request $request)
    {

        $user = $request->user();
        $data = [
            'subscription' => $user->remainsSubscriber(),
            'experience' => $user->experience(),
            'invoices' => $user->invoices()->count(),
            'articles_count' => $user->articles()->count(),
            'viewer_articles' => $user->articles()->sum('views'),
            'watch_later' => $user->watchLaters()->count(),

        ];



        return inertia('User/Dashboard', compact('data'));
    }
}
