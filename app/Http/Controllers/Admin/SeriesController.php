<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateSerieRequest;
use App\Http\Services\SerieService;
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
}
