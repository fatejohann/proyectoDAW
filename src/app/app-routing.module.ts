import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarLibrosComponent } from './components/registrar-libros/registrar-libros.component';
import { RegistroAutorComponent } from './components/registro-autor/registro-autor.component';
import { RegistroColeccionComponent } from './components/registro-coleccion/registro-coleccion.component';
import { RegistroLibrosDeseadosComponent } from './components/registro-libros-deseados/registro-libros-deseados.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {path: 'menu',component: MenuComponent},
  { path: 'registrar-libros', component: RegistrarLibrosComponent },
  { path: 'registro-libros-deseados', component: RegistroLibrosDeseadosComponent },
  { path: 'registro-coleccion', component: RegistroColeccionComponent },
  { path: 'registro-autor', component: RegistroAutorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }