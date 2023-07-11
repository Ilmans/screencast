<?php

namespace App\Http\Controllers;

use App\Http\Services\SerieService;
use App\Models\Serie;
use App\Models\Video;
use Illuminate\Http\Request;

class SerieController extends Controller
{
    private $serieService;
    public function __construct(SerieService $serieService)
    {
        $this->serieService = $serieService;
    }

    public function show(Serie $serie)
    {
        $serie = $this->serieService->setSeries($serie->query());
        $serie = $this->serieService->getSingle();

        return inertia('Serie/Show', compact('serie'));
    }

    public function watch(Serie $serie, Video $video)
    {
        $serie = $this->serieService->setSeries($serie->query());
        $serie = $this->serieService->getSingle();
        $video = $video;
        return inertia('Serie/Watch', compact('serie', 'video'));
    }
}
