<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'slug' => fake()->slug(),
            'description' => fake()->text(),
            'large_description' => fake()->text(500),
            'price' => fake()->randomFloat(2, 10, 100),
            'image' => fake()->randomElement([
                '1.webp',
                '2.webp',
                '3.avif',
            ]),
        ];
    }
}
