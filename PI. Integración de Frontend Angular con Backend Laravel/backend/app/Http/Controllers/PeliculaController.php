<?php

namespace App\Http\Controllers;

use App\Models\Pelicula;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PeliculaController extends Controller
{
    public function index(){ return Pelicula::orderBy('id','desc')->get(); }
    public function store(Request $r){
        $data = $r->validate([
            'nombre' => 'required|string|max:255',
            'sinopsis' => 'nullable|string',
            'imagen' => 'nullable|url',
            'anio' => 'nullable|integer'
        ]);
        $p = Pelicula::create($data);
        return response($p, Response::HTTP_CREATED);
    }
    public function show($id){ return Pelicula::findOrFail($id); }
    public function update(Request $r, $id){
        $p = Pelicula::findOrFail($id);
        $data = $r->validate([
            'nombre' => 'required|string|max:255',
            'sinopsis' => 'nullable|string',
            'imagen' => 'nullable|url',
            'anio' => 'nullable|integer'
        ]);
        $p->update($data);
        return response($p, Response::HTTP_OK);
    }
    public function destroy($id){
        $p = Pelicula::findOrFail($id);
        $p->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
