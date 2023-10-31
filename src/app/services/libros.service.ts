import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private firestore: AngularFirestore) {}

  agregarLibro(libro: any) {
    return this.firestore.collection('libros').add(libro);
  }

  obtenerLibros() {
    return this.firestore.collection('libros').valueChanges();
  }
}
