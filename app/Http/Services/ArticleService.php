<?php

namespace  App\Http\Services;

use App\Models\Article;
use App\Models\Topic;

class ArticleService
{



    public function getPopularArticle()
    {
        return Article::with('topics')->with('user')->orderBy('views', 'desc')->take(3)->get();
    }


    public function getAllArticles(): \Illuminate\Pagination\LengthAwarePaginator
    {
        $request = request();
        $articles = Article::with('topics')->with('user');
        if ($request->search) {
            $articles = $articles->where('title', 'like', '%' . $request->search . '%')->orWhere('body', 'like', '%' . $request->search . '%');
        }
        if ($request->topic) {
            $articles = $articles->whereHas('topics', function ($query) use ($request) {
                return $query->where('slug', $request->topic);
            });
        }

        return $articles->orderBy('created_at', 'desc')->paginate(10);
    }




    /**
     * @return void
     * post create article
     */
    public function createArticle($request): void
    {
        // add slug to request
        $request->merge(['slug' => \Str::slug($request->title)]);
        $topicId = Topic::where('slug', $request->topic)->first()->id;
        $article = $request->user()->articles()->create($request->all());
        $article->topics()->attach($topicId);
    }
}
