<?php

namespace App\Http\Controllers;

use App\Http\Services\SerieService;
use App\Http\Services\VideoService;
use App\Models\Serie;
use App\Models\Video;

class SerieController extends Controller
{
    private $serieService;
    private $videoService;

    public function __construct(SerieService $serieService, VideoService $videoService)
    {
        $this->serieService = $serieService;
        $this->videoService = $videoService;
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
        $canWatch = $this->videoService->canWatch($video);

        return inertia('Serie/Watch', compact('serie', 'video', 'canWatch'));
    }
}
