<?php

namespace App\Http\Controllers;

use App\Http\Services\SerieService;
use App\Models\Serie;
use Illuminate\Http\Request;

class SerieController extends Controller
{

    private $serieService;
    public function __construct(SerieService $serieService)
    {
        $this->serieService = $serieService;
    }
    
    public function show(Serie $serie) {

        $serie = $this->serieService->setSeries(Serie::whereId($serie->id));
        $serie = $this->serieService->getSingle();
       
        return inertia("Serie/Show",compact("serie"));
    }
}
