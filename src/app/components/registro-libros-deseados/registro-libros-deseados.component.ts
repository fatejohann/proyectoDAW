import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-registro-libros-deseados',
  templateUrl: './registro-libros-deseados.component.html',
  styleUrls: ['./registro-libros-deseados.component.css']
})
export class RegistroLibrosDeseadosComponent {
  libros: any[] = [];
  libro = {
    titulo: '',
    autor: '',
    categoria: '',
    precio: 0,
    portada: ''
  };

  libroDeseado: any = null;

  constructor(private librosService: LibrosService, private router: Router) {
    this.librosService.obtenerLibros().subscribe(libros => {
      this.libros = libros;
    });
  }

  returnMenu() {
    this.router.navigate(['/menu']);
  }

  confirm() {
    if (this.libroDeseado) {
      this.librosService.agregarLibroDeseado(this.libroDeseado).then(() => {
        alert("Libro deseado registrado!");
        this.libroDeseado = null;
      }).catch(error => {
        console.error("Error al agregar el libro deseado:", error);
        alert("Hubo un error al registrar el libro deseado.");
      });
    } else {
      alert("Por favor, selecciona un libro de la lista antes de confirmar.");
    }
  }

  seleccionarLibro(libro: any) {
    // Almacena solo el título del libro en libroDeseado
    this.libroDeseado = { titulo: libro.titulo };
  }

  handlePortada(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.libro.portada = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
