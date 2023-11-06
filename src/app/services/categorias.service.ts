import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  constructor(private firestore: AngularFirestore) {}

  // Método para agregar una nueva categoría
  agregarCategoria(categoria: Categoria) {
    return this.firestore.collection('categorias').add(categoria);
  }

  // Método para obtener todas las categorías
  obtenerCategorias() {
    return this.firestore.collection('categorias').valueChanges();
  }
}

