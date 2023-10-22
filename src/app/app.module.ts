import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarLibrosComponent } from './components/registrar-libros/registrar-libros.component';
import { RegistroLibrosDeseadosComponent } from './components/registro-libros-deseados/registro-libros-deseados.component';
import { RegistroColeccionComponent } from './components/registro-coleccion/registro-coleccion.component';
import { RegistroAutorComponent } from './components/registro-autor/registro-autor.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarLibrosComponent,
    RegistroLibrosDeseadosComponent,
    RegistroColeccionComponent,
    RegistroAutorComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
