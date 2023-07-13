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
            'unique_video_id' => "7UfM7Lkw4U4",
            'order_num' => $this->faker->unique()->numberBetween(1, 100000),
            'seconds_time' => $this->faker->numberBetween(60, 600),
            'description' => $this->faker->paragraph,
            'is_free' => $this->faker->boolean,
        ];
    }
}
