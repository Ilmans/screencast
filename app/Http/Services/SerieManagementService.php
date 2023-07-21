<?php 

namespace App\Http\Services;

use App\Models\Serie;

class SerieManagementService extends UploadImageService {


        private $pathThumbnail = 'images/series/thumbnails/';


        public function createSerie ($request)  : void
        
        {
          
            $slug = \Str::slug($request->title);
            $nameImage = $this->uploadImage($slug,$request->thumbnail,$this->pathThumbnail);
           
            $serie = Serie::create([
                'title' => $request->title,
                'description' => $request->description,
                'image' => $nameImage,
                'slug' => $slug
            ]);
            $serie->topics()->sync($request->topic);
        }

}
?>