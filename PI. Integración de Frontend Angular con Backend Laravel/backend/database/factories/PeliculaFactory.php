<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Pelicula;

class PeliculaFactory extends Factory
{
    protected $model = Pelicula::class;

    public function definition()
    {
        return [
            'nombre' => $this->faker->catchPhrase(),
            'sinopsis' => $this->faker->paragraph(),
            'imagen' => 'https://via.placeholder.com/400x200?text=Movie',
            'anio' => $this->faker->year()
        ];
    }
}
