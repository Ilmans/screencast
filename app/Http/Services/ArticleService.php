<?php

namespace  App\Http\Services;

use App\Models\Article;

class ArticleService
{



    public function getAllArticles(): \Illuminate\Pagination\LengthAwarePaginator
    {
        return Article::with('topics')->with('user')->orderBy('created_at', 'desc')->paginate(6);
    }


    public function getPopularArticle()
    {
        return Article::with('topics')->with('user')->orderBy('views', 'desc')->take(3)->get();
    }
}
