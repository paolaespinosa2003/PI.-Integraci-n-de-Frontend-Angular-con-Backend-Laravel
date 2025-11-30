import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar.component';
import { IndexComponent } from './pages/index.component';
import { CatalogoComponent } from './pages/catalogo.component';
import { PeliculaDetalleComponent } from './pages/pelicula-detalle.component';
import { PeliculaFormComponent } from './pages/pelicula-form.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'pelicula/nuevo', component: PeliculaFormComponent },
  { path: 'pelicula/editar/:id', component: PeliculaFormComponent },
  { path: 'pelicula/:id', component: PeliculaDetalleComponent }
];

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, IndexComponent,
    CatalogoComponent, PeliculaDetalleComponent, PeliculaFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
