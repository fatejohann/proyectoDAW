import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  constructor(private firestore: AngularFirestore) {}

  obtenerAutores() {
    
    return this.firestore.collection('/Autores').valueChanges();
  }

  agregarAutor(autor: any) {
    
    return this.firestore.collection('/Autores').add(autor);
  }
}
