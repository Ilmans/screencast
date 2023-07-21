<?php 

namespace App\Http\Services;

class UploadImageService
{

    public function uploadImage( $name, $image, $path) 
    {
        $imageName = $name . "." . $image->extension();
        if (file_exists(public_path($path . $imageName))) {
            $this->deleteImage($path, $imageName);
        }
        $image->move(public_path($path), $imageName);
        return $imageName;
    }


    public function deleteImage($path, $oldImage)
    {
        if (file_exists(public_path($path . $oldImage))) {
            unlink(public_path($path . $oldImage));
        }
    }

}
?>