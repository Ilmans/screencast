<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateSerieRequest;
use App\Http\Services\SerieService;
use App\Http\Services\VideoService;
use App\Models\Serie;
use Illuminate\Http\Request;

class SeriesController extends Controller
{
    private $seriesService;
    public function __construct(SerieService $seriesService)
    {
        $this->seriesService = $seriesService;
    }
    
    public function index (Request $request) {

        $series = $this->seriesService->sort()->getSeries();
        return inertia('Admin/Serie/Index',compact('series'));

    }

    public function create () {
        return inertia('Admin/Serie/Create');
    }


    public function store (CreateSerieRequest $request) {
        try {
            $this->seriesService->createSerie($request);
            return redirect()->route('admin.series.index')->with('success','Serie created successfully.');
        } catch (\Throwable $th) {
            throw $th;
            return redirect()->back()->with('error','Something went wrong.');
        }
    }


    public function manageSerieVideos (Serie $serie) {
        $videoService = new VideoService();
        $videos = $videoService->getVideosBySerie($serie);
        return inertia('Admin/Serie/ManageVideos',compact('serie','videos'));
    }

    public function toggleStatus (Serie $serie)
    {
        try {
            $serie->update([
                'status' => $serie->status === 'published' ? 'draft' : 'published'
            ]);
            return redirect()->back()->with('success','Serie status updated successfully.');
        } catch (\Throwable $th) {
            throw $th;
            return redirect()->back()->with('error','Something went wrong.');
        }
    }


  


   
}
