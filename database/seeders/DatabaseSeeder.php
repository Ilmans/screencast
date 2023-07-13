<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Serie;
use App\Models\Topic;
use App\Models\User;
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

        User::create([
            'name' => 'Test User',
            'username' => 'test',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('12345678'),


        ]);

        \App\Models\Topic::factory(5)
            ->create()
            ->each(function ($topic) {
                $series = Serie::factory()
                    ->count(20)
                    ->create();
                $topic->series()->attach($series);
                $series->each(function ($serie) {
                    Video::factory()
                        ->count(20)->create(
                            ['serie_id' => $serie->id]
                        );
                });
            });


            // cretae 3 topic and each topic have 10 articles and article user id is 1
            Topic::factory(3)
            ->create()->each(function ($topic) {
                $topic->articles()->createMany(
                    \App\Models\Article::factory(10)->make(['user_id' => 1])->toArray()
                );

                
            });
    }
}
