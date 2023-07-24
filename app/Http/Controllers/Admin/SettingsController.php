<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Website;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class SettingsController extends Controller
{
    public function index()
    {
        $settings = Website::first();
        return inertia('Admin/Setting/Index', [
            'settings' => $settings,
        ]);
    }

    public function set(Request $request)
    {
        $data = $request->all();


        if ($request->socials) {
            $socials = json_encode($request->socials);
            $data['socials'] = $socials;
        }

        if($request->contacts)
        {
            $contacts = json_encode($request->contacts);
            $data['contact'] = $contacts;
        }

        $checkIsExist = Website::first();
        if ($checkIsExist) {
            $checkIsExist->update($data);
        } else {
            Website::create($data);
        }

        Cache::forget('website');
        $rand = rand(1, 10);

        return redirect()
            ->back()
            ->with('success', 'Settings updated successfully ' . $rand);
    }
}
