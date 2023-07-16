<?php

namespace App\Http\Controllers;

use App\Http\Requests\CretateArticleRequest;
use App\Http\Requests\EditArticleRequest;
use App\Http\Services\ArticleService;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{


    private $articleService;
    public function __construct(ArticleService $articleService)
    {
        $this->articleService = $articleService;
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
     * @param $article
     * @return \Inertia\Response
     * this method is used to show article
     */
    public function show(Article $article)
    {
        $article->load('user', 'topics');
        $article->increment('views');
        return inertia("Articles/Show", compact('article'));
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
            return redirect()->route('my-articles')->with('success', 'Article created successfully');
        } catch (\Throwable $th) {
            return back()->with('error', 'Something went wrong');
        }
    }


    public function edit(Article $article)
    {
        $this->authorize('update', $article);
        $article->load('topics');
        return inertia("Articles/Edit", compact('article'));
    }

    public function update(EditArticleRequest $request, Article $article)
    {

        $this->authorize('update', $article);
        try {
            $this->articleService->updateArticle($request, $article);
            return back();
        } catch (\Throwable $th) {
            return back()->with('error', 'Something went wrong');
        }
    }
}
