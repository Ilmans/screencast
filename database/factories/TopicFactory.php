<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Topic>
 */
class TopicFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
       $topics = [
        'HTML',
        'CSS',
        'JavaScript',
        'Laravel',
        'Node.js',
        'PHP',
        'Vue.js',
        'React.js',
        'Angular',
        'Python',
        'Django',
        'Ruby',
        'Rails',
        'MySQL',
        'MongoDB',
        'PostgreSQL',
        'GraphQL',
        'Docker',
        'Kubernetes',
    ];

    return [
        'name' => $this->faker->randomElement($topics),
        'slug' => $this->faker->slug,
        'description' => $this->faker->paragraph,
    ];
    }
}
