<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Serie>
 */
class SerieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'slug' => $this->faker->slug,
            'title' => $this->faker->sentence(5),
            'description' => $this->faker->paragraph,
            'image' => "https://ik.imagekit.io/vpaoovtzwz/images/series/ui-laravel-dan-react-nqp6j.jpg?tr=n-thumbnail",
        ];
    }
}
