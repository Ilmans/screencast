<?php

namespace  App\Http\Services;

use App\Models\Article;
use App\Models\Topic;
use Illuminate\Database\Eloquent\Builder;

class ArticleService extends UploadImageService
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
        return $this->article->with('topics')->with('user')->orderBy('views', 'desc')->take(3)->get();
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

        $request->whenFilled('topic', function ($topic) {
            $this->article->whereHas('topics', function ($query) use ($topic) {
                $query->where('slug', $topic);
            });
        });
        $request->whenFilled('search', function ($search) {
            $this->article->where('title', 'like', '%' . $search . '%');
        });

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
        $imageName = $this->uploadImage($request->title, $request->image, '/images/articles/');
        $topicId = Topic::whereIn('id', $request->topic)->pluck('id');
        $article = $request->user()->articles()->create([
            'title' => $request->title,
            'slug' => \Str::slug($request->title),
            'image' => $imageName,
            'synopsis' => $request->synopsis,
            'body' => $request->body,
        ]);
        $article->topics()->attach($topicId);
    }


    /**
     * @return void
     * put update article
     */

    public function updateArticle($request, $article): void
    {
        $imageName = $article->image;
        if($request->hasFile('image')){
            $this->deleteImage("/images/articles/", $article->image);
            $imageName = $this->uploadImage($request->title, $request->image, '/images/articles/');
        }
        $selectedTopicIds = Topic::whereIn('id', $request->topic)->pluck('id');
        $article->update([
            'title' => $request->title,
            'slug' => \Str::slug($request->title),
            'image' => $imageName,
            'synopsis' => $request->synopsis,
            'body' => $request->body,
            'published' => $request->published,

        ]);
        $article->topics()->sync($selectedTopicIds);
    }


    /**
     * @return void
     * delete article
     */

    public function deleteArticle($article): void
    {
        $article->delete();
    }


    public function canView ($article) : bool
    {
        $isAuth = auth()->check();
        $isAuthor = $isAuth && auth()->user()->id === $article->user_id;
        $isAdmin = $isAuth && auth()->user()->is_admin;
        $isPublished = $article->published;

        return $isPublished || $isAuthor || $isAdmin;

    }
}
