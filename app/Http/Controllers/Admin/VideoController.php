<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\VideoRequest;
use App\Http\Services\VideoService;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VideoController extends Controller
{
    private $serviceVideo;

    public function __construct(VideoService $videoService)
    {
        $this->serviceVideo = $videoService;
    }

    public function update(Video $video, VideoRequest $request)
    {
        try {
            $this->serviceVideo->updateVideo($request, $video);
            return back()->with('success', 'Video updated successfully');
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }

    public function store(Request $request)
    {
       
        try {
            $this->serviceVideo->storeVideo($request);
            return back()->with('success', 'Video created successfully');
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }

    public function swapVideos(Request $request)
    {
       
        $destinationOrderNum = $request->destination_order_num;
        $sourceOrderNum = $request->source_order_num;
        $serieId = $request->serie_id;

        // Mulai transaksi database
        DB::beginTransaction();

        try {
            // Lakukan pertukaran urutan video dalam satu transaksi
            Video::where('serie_id', $serieId)
                ->where('order_num', $destinationOrderNum)
                ->update(['order_num' => -1]); // Nilai sementara untuk tujuan swap

            Video::where('serie_id', $serieId)
                ->where('order_num', $sourceOrderNum)
                ->update(['order_num' => $destinationOrderNum]);

            Video::where('serie_id', $serieId)
                ->where('order_num', -1)
                ->update(['order_num' => $sourceOrderNum]);

            // Commit transaksi jika semua operasi berhasil
            DB::commit();

            return json_encode([
                'success' => true
            ]);
        } catch (\Throwable $th) {
            // Rollback transaksi jika terjadi kesalahan
            DB::rollBack();
            
            return json_encode([
                'error' => $th->getMessage()
            ]);
        }
    }
}
