<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Services\ArticleService;
use App\Models\Article;
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

    public function publish (Article $article,Request $request)
    {
        $article->update(['published' => true ]);
        return back()->with('success',"Article publish successfully");
    }
    public function unpublish (Article $article,Request $request)
    {
        $article->update(['published' => false ]);
        return back()->with('success',"Article unpublish successfully");
    }
}
