<?php

namespace App\Http\Controllers;

use App\Http\Services\SerieService;
use App\Http\Services\VideoService;
use App\Models\Serie;
use App\Models\Video;
use Illuminate\Http\Request;

class SerieController extends Controller
{
    private $serieService;
    private $videoService;

    public function __construct(SerieService $serieService, VideoService $videoService)
    {
        $this->serieService = $serieService;
        $this->videoService = $videoService;
    }


    public function show(Serie $serie,)
    {

        $serie = $this->serieService->published()->getSingle($serie->id);
        $isSavedWatchLater = $this->serieService->isSavedWatchLater($serie);

        return inertia('Serie/Show', compact('serie', 'isSavedWatchLater'));
    }

    public function watch(Serie $serie, Video $video)
    {
        try {
            $canWatch = $this->videoService->canWatch($video);
        } catch (\Throwable $th) {
            $video = $serie->videos()->first();
            return redirect()->route('serie.watch', [$serie->slug, $video->order_num]);
        }
        $serie = $this->serieService->getSingle($serie->id);

        return inertia('Serie/Watch', compact('serie', 'video', 'canWatch'));
    }
}
