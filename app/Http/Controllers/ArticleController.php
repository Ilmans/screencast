<?php

namespace App\Http\Controllers;

use App\Http\Requests\CretateArticleRequest;
use App\Http\Services\ArticleService;
use App\Http\Services\TopicService;
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
    public function index()
    {
        $articleTopics = $this->topicService->getAllArticlesTopics();
        $popularArticles = $this->articleService->getPopularArticle();
        $articles = Inertia::lazy(function () {
            return $this->articleService->getAllArticles();
        });

        return inertia("Articles/Index", compact('articleTopics', 'popularArticles', 'articles'));
    }

    /**
     * @return \Inertia\Response
     * this method is used to show all articles of the user
     */

    public function myArticles()
    {
        return inertia("Articles/MyArticles");
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
