<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    
    public function index ()
    {
        $pages = Page::all();
        return inertia('Admin/Page/Index',compact('pages'));
    }

    public function store (Request $request) {
        $request->validate([
            'title' => 'string|min:5|max:30',
            'content' => 'string|min:50|'
        ]);

        try {
            //code...
            $request->merge(['slug' => \Str::slug($request->title)]);
            Page::create($request->all());
            return back()->with('success',"Page created successfully");
        } catch (\Throwable $th) {
            return back()->with('error',"Something went wrong (i)");
        }

    }


    public function destroy (Page $page)
    {
        $page->delete();
        return back()->with('success','Page deleted successfully');
    }
}
