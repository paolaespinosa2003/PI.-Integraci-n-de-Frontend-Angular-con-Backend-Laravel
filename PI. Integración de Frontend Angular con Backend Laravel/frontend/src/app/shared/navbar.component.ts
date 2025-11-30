import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" routerLink="/">Películas</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><a class="nav-link" routerLink="/">Inicio</a></li>
          <li class="nav-item"><a class="nav-link" routerLink="/catalogo">Catálogo</a></li>
        </ul>
      </div>
    </div>
  </nav>
  `
})
export class NavbarComponent {}
