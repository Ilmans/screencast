<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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


        $series = $this->seriesService->getSeries();
        return inertia('Admin/Serie/Index',compact('series'));

    }
}
