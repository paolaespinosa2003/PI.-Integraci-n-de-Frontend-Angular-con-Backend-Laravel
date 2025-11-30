import { Component } from '@angular/core';

@Component({
  template: `
  <div class="text-center">
    <h1>Catálogo de Películas</h1>
    <p class="lead">Administra, agrega y consulta información de tus películas favoritas.</p>
    <a class="btn btn-primary" routerLink="/catalogo">Ver catálogo</a>
  </div>
  `
})
export class IndexComponent {}
