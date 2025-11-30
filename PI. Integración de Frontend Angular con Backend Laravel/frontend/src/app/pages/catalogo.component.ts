import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  template: `
  <div class="d-flex justify-content-between align-items-center mb-3">
    <h2>Catálogo</h2>
    <a class="btn btn-success" routerLink="/pelicula/nuevo">Agregar Película</a>
  </div>
  <div *ngIf="movies?.length; else empty">
    <div class="row row-cols-1 row-cols-md-3 g-3">
      <div class="col" *ngFor="let m of movies">
        <div class="card h-100">
          <img [src]="m.imagen" class="card-img-top" alt="{{m.nombre}}" onerror="this.src='https://via.placeholder.com/400x200?text=No+Image'">
          <div class="card-body">
            <h5 class="card-title"><a [routerLink]="['/pelicula', m.id]">{{ m.nombre }}</a></h5>
            <p class="card-text">{{ m.sinopsis | slice:0:120 }}...</p>
            <p class="text-muted">Año: {{ m.anio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ng-template #empty><p>No hay películas. Agrega la primera.</p></ng-template>
  `
})
export class CatalogoComponent implements OnInit {
  movies: any[] = [];
  constructor(private svc: PeliculaService) {}
  ngOnInit(){ this.svc.list().subscribe((r:any)=> this.movies = r); }
}
