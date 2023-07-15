<?php

namespace  App\Http\Services;

use App\Models\Article;
use App\Models\Topic;
use Illuminate\Database\Eloquent\Builder;

class ArticleService
{


    private Builder $article;

    public function __construct()
    {
        $this->article = Article::query();
    }

    public function setArticleBuilder(Builder $article)
    {
        $this->article = $article;
    }



    /**
     * @return \Illuminate\Database\Eloquent\Collection
     * get all articles
     */

    public function getPopularArticle()
    {
        return Article::with('topics')->with('user')->orderBy('views', 'desc')->take(3)->get();
    }


    /**
     * @return $this
     * get all articles
     */
    public function onlyPublished()
    {
        $this->article->where('published', true);
        return $this;
    }


   



    public function useFilter($request)
    {

        if ($request->search) {
            $this->article->where('title', 'like', '%' . $request->search . '%')->orWhere('body', 'like', '%' . $request->search . '%');
        }
        if ($request->topic) {
            $this->article->whereHas('topics', function ($query) use ($request) {
                return $query->where('slug', $request->topic);
            });
        }
        return $this;
    }



    /**
     * @return \Illuminate\Pagination\LengthAwarePaginator
     * get all articles with pagination
     */
    public function getAllArticles(): \Illuminate\Pagination\LengthAwarePaginator
    {

        $articles = $this->article->with('topics')->with('user');
        return $articles->orderBy('created_at', 'desc')->paginate(10);
    }




    /**
     * @return void
     * post create article
     */
    public function createArticle($request): void
    {
        // add slug to request
        $published = $request->user->is_admin ? true : false;
        $request->merge(['slug' => \Str::slug($request->title), 'published' => $published]);
        $topicId = Topic::where('slug', $request->topic)->first()->id;
        $article = $request->user()->articles()->create($request->all());
        $article->topics()->attach($topicId);
    }
}
