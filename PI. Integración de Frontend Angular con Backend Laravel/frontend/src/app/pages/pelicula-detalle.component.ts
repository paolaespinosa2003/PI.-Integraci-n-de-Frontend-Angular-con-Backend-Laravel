import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  template: `
  <div *ngIf="movie">
    <div class="row">
      <div class="col-md-4"><img [src]="movie.imagen" class="img-fluid" alt="{{movie.nombre}}"></div>
      <div class="col-md-8">
        <h2>{{ movie.nombre }} <small class="text-muted">({{ movie.anio }})</small></h2>
        <p>{{ movie.sinopsis }}</p>
        <div class="btn-group">
          <button class="btn btn-primary" (click)="edit()">Editar</button>
          <button class="btn btn-danger" (click)="confirmDelete()">Eliminar</button>
          <button class="btn btn-secondary" (click)="back()">Regresar</button>
        </div>
      </div>
    </div>
  </div>
  `
})
export class PeliculaDetalleComponent implements OnInit {
  movie: any;
  id: any;
  constructor(private route: ActivatedRoute, private svc: PeliculaService, private router: Router){}
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.svc.get(this.id).subscribe((r:any)=> this.movie = r);
  }
  edit(){ this.router.navigate(['/pelicula/editar', this.id]); }
  back(){ this.router.navigate(['/catalogo']); }
  confirmDelete(){
    if(confirm('¿Deseas eliminar esta película? Esta acción no se puede deshacer.')){
      this.svc.delete(this.id).subscribe(()=> this.router.navigate(['/catalogo']));
    }
  }
}
