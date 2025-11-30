<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(){
        Schema::create('peliculas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->text('sinopsis')->nullable();
            $table->string('imagen')->nullable();
            $table->integer('anio')->nullable();
            $table->timestamps();
        });
    }
    public function down(){ Schema::dropIfExists('peliculas'); }
};
