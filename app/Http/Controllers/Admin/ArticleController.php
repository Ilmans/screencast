<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Services\ArticleService;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    
    private $articleService;
    public function __construct (ArticleService $articleService)
    {
        $this->articleService = $articleService;
    }

    public function index (Request $request)
    {
        $articles = $this->articleService->useFilter($request)->getAllArticles();
        return inertia("Admin/Article/Index", compact('articles'));
    }
}
