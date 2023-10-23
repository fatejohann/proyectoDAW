import { Component } from '@angular/core';

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

  returnMenu() {
    alert("Redirigiendo al menu");
  }

  confirm() {
    this.libros.push({...this.libro});
    this.libro = { titulo: '', autor: '', categoria: '', precio: 0, portada: '' };
    alert("Libro registrado!");
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

