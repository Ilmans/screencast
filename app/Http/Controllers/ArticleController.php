<?php

namespace App\Http\Controllers;

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
    }

    public function create()
    {
       return inertia("Articles/Create");
    }
}
