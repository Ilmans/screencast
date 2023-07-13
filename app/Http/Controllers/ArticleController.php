<?php

namespace App\Http\Controllers;

use App\Http\Services\ArticleService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{


    private $articleService;
    public function __construct(ArticleService $articleService)
    {
        $this->articleService = $articleService;
    }
    public function index()
    {
        $articleTopics = (new \App\Http\Services\TopicService())->getAllArticlesTopics();
        $popularArticles = $this->articleService->getPopularArticle();
        $articles = Inertia::lazy(function () {
            return $this->articleService->getAllArticles();
        });

        return inertia("Articles/Index", compact('articleTopics', 'popularArticles', 'articles'));
    }
}
