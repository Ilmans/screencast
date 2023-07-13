<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->foreignId("serie_id")->references("id")->on("series")->onDelete("cascade");
            $table->string("title");
            $table->string("unique_video_id");
            $table->integer("order_num");
            $table->integer("seconds_time");
            $table->text("description")->nullable();
            $table->boolean("is_free");


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('videos');
    }
};
