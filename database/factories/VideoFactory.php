<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Video>
 */
class VideoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'title' => $this->faker->sentence,
        'video_url' => "https://www.youtube.com/watch?v=83ntBBDC8Xs",
        'order' => $this->faker->unique()->numberBetween(1, 50),
        'seconds_time' => $this->faker->numberBetween(60, 600),
        'description' => $this->faker->paragraph,
        'is_free' => $this->faker->boolean,
    ];
    }
}
