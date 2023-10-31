import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LibrosService } from '../../services/libros.service';


@Component({
  selector: 'app-registrar-libros',
  templateUrl: './registrar-libros.component.html',
  styleUrls: ['./registrar-libros.component.css']
})
export class RegistrarLibrosComponent {
  libros: any[] = [];
  libro = {
    titulo: '',
    autor: '',
    categoria: '',
    precio: 0,
    portada: ''
  };

  constructor(private librosService: LibrosService, private router: Router) {
    this.librosService.obtenerLibros().subscribe(libros => {
      this.libros = libros;
    });
  }

  returnMenu() {
    // Utiliza el servicio Router para redirigir al menú
    this.router.navigate(['/menu']);
  }

  confirm() {
    // Llama al servicio para agregar el libro a la base de datos
    this.librosService.agregarLibro(this.libro).then(() => {
      // Limpia el formulario después de agregar el libro
      this.libro = { titulo: '', autor: '', categoria: '', precio: 0, portada: '' };
      alert("Libro registrado!");
    }).catch(error => {
      console.error("Error al agregar el libro:", error);
      alert("Hubo un error al registrar el libro.");
    });
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
