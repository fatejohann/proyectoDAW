import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-registro-coleccion',
  templateUrl: './registro-coleccion.component.html',
  styleUrls: ['./registro-coleccion.component.css']
})
export class RegistroColeccionComponent {
  categoria: Categoria = { nombre: '' }; // Inicializa la categoría

  constructor(private categoriasService: CategoriasService, private router: Router) {}

  registrarCategoria() {
    // Llama al servicio para agregar la categoría a la base de datos
    this.categoriasService.agregarCategoria(this.categoria).then(() => {
      // Limpia el formulario después de agregar la categoría
      this.categoria = { nombre: '' };
      alert('Categoría registrada exitosamente');
    }).catch(error => {
      console.error('Error al agregar la categoría:', error);
      alert('Hubo un error al registrar la categoría.');
    });
  }

  returnMenu() {
    this.router.navigate(['/menu']);
  }
}
