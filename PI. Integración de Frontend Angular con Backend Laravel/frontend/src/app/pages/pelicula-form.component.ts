import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  template: `
  <div class="card p-3">
    <h3 *ngIf="!isEdit">Agregar Película</h3>
    <h3 *ngIf="isEdit">Editar Película</h3>
    <form [formGroup]="form" (ngSubmit)="submit()">
      <div class="mb-3">
        <label class="form-label">Nombre</label>
        <input class="form-control" formControlName="nombre">
      </div>
      <div class="mb-3">
        <label class="form-label">Sinopsis</label>
        <textarea class="form-control" formControlName="sinopsis"></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">Imagen (URL)</label>
        <input class="form-control" formControlName="imagen">
      </div>
      <div class="mb-3">
        <label class="form-label">Año</label>
        <input class="form-control" formControlName="anio" type="number">
      </div>
      <div class="d-flex gap-2">
        <button class="btn btn-success" [disabled]="form.invalid">{{ isEdit ? 'Guardar' : 'Agregar' }}</button>
        <button class="btn btn-secondary" type="button" (click)="cancel()">Cancelar</button>
      </div>
    </form>
  </div>
  `
})
export class PeliculaFormComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  id: any;
  constructor(private fb: FormBuilder, private svc: PeliculaService, private route: ActivatedRoute, private router: Router){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      sinopsis: ['', Validators.required],
      imagen: [''],
      anio: [new Date().getFullYear(), Validators.required]
    });
  }
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.isEdit = true;
      this.svc.get(this.id).subscribe((r:any)=> this.form.patchValue(r));
    }
  }
  submit(){
    if(this.isEdit){
      this.svc.update(this.id, this.form.value).subscribe(()=> this.router.navigate(['/pelicula', this.id]));
    } else {
      this.svc.create(this.form.value).subscribe(()=> this.router.navigate(['/catalogo']));
    }
  }
  cancel(){ this.router.navigate(['/catalogo']); }
}
