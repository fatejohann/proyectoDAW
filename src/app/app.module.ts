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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';


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
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"proyectodaw-b3cbb","appId":"1:442942467897:web:99ef7b75bbc4194dff02e8","storageBucket":"proyectodaw-b3cbb.appspot.com","apiKey":"AIzaSyD4ACtEfzRhkfHN2chIvtgece5KGscW78k","authDomain":"proyectodaw-b3cbb.firebaseapp.com","messagingSenderId":"442942467897","measurementId":"G-T3KSVM4TMR"})),provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
