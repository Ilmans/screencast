<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "slug" => $this->faker->slug,
            "title" => $this->faker->sentence,
            "synopsis" => $this->faker->sentence,
            "body" => $this->faker->paragraph,
            "image" => "https://ik.imagekit.io/vpaoovtzwz/images/articles/laravel-observer-4zdwya.jpg?tr=n-thumbnail",
            "published" => false,
            "views" => 0,
        ];
    }
}
