<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PeliculaController;

Route::apiResource('peliculas', PeliculaController::class);
