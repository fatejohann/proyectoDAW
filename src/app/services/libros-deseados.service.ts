import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class LibrosDeseadosService {

  constructor(private firestore: AngularFirestore) {}

  ObtenerLibrosDeseados() {
    
    return this.firestore.collection('/Deseados').valueChanges();
  }

  AgregarLibrosDeseados(deseado: any) {
    
    return this.firestore.collection('/Deseados').add(deseado);
  }
}
