<?php 
namespace App\Http\Services;

use App\Models\Serie;
use App\Models\Topic;
use Illuminate\Database\Eloquent\Builder;

class SerieService {


    private Builder $series;
    public function __construct()
    {
      $this->series = Serie::query();
    }

    public function byTopic (Topic $topic) {
      $this->series->whereHas('topics',function ($query) use ($topic) {
        $query->where("topics.id",$topic->id);
      });
      return $this;
    }

    public function search($keyword) {
      if($keyword){
        $this->series
             ->where("title","like","%$keyword%");
      }
      return $this;
    }


    public function getSeries() {
      return $this->series->with("topics")->paginate(12);
    }
}
?>