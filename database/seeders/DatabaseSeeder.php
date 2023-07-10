<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Serie;
use App\Models\Topic;
use App\Models\Video;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\Topic::factory(5)
            ->create()
            ->each(function ($topic) {
                $series = Serie::factory()
                    ->count(20)
                    ->create();
                $topic->series()->attach($series);
                $series->each(function ($serie) {
                    Video::factory()
                        ->count(10)->create(
                            ['serie_id' => $serie->id]
                        );
                        
                });
            });
    }
}
