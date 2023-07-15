<?php

namespace App\Http\Controllers;

use App\Http\Requests\CretateArticleRequest;
use App\Http\Services\ArticleService;
use App\Http\Services\TopicService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{


    private $articleService;
    private $topicService;
    public function __construct(ArticleService $articleService, TopicService $topicService)
    {
        $this->articleService = $articleService;
        $this->topicService = $topicService;
    }


    /**
     * @return \Inertia\Response
     * this method is used to show all articles public
     */
    public function index(Request $request)
    {

        $popularArticles = $this->articleService->getPopularArticle();
        $articles = Inertia::lazy(function () use ($request) {
            return $this->articleService->onlyPublished()->useFilter($request)->getAllArticles();
        });

        return inertia("Articles/Index", compact('popularArticles', 'articles'));
    }

    /**
     * @return \Inertia\Response
     * this method is used to show all articles of the user
     */

    public function myArticles(Request $request)
    {
        $this->articleService->setArticleBuilder($request->user()->articles()->getQuery());
        $articles = $this->articleService->useFilter($request)->getAllArticles();
        return inertia("Articles/MyArticles", compact('articles'));
    }

    public function create()
    {
        return inertia("Articles/Create");
    }

    public function store(CretateArticleRequest $request)
    {

        try {
            $this->articleService->createArticle($request);
            return back();
        } catch (\Throwable $th) {
            return back()->with('error', 'Something went wrong');
        }
    }
}
