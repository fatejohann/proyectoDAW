import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarLibrosComponent } from './components/registrar-libros/registrar-libros.component';
import { RegistroLibrosDeseadosComponent } from './components/registro-libros-deseados/registro-libros-deseados.component';
import { RegistroColeccionComponent } from './components/registro-coleccion/registro-coleccion.component';
import { RegistroAutorComponent } from './components/registro-autor/registro-autor.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    RegistrarLibrosComponent,
    RegistroLibrosDeseadosComponent,
    RegistroColeccionComponent,
    RegistroAutorComponent,
    MenuComponent,
    LoginComponent,
    InicioComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
     FormsModule,
     ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
