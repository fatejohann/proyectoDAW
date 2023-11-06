import { Component } from '@angular/core';
import { AutoresService } from '../../services/autores.service'; // Importa el servicio de autores
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-autor',
  templateUrl: './registro-autor.component.html',
  styleUrls: ['./registro-autor.component.css']
})
export class RegistroAutorComponent {
  autor: any = {
    nombre: '',
    apellidos: '',
    fechaNacimiento: '',
    bibliografia: ''
  };

  constructor(private autoresService: AutoresService, private router: Router) {}

  registrarAutor() {
    // Llama al servicio para agregar el autor a la base de datos
    this.autoresService.agregarAutor(this.autor).then(() => {
      // Limpia el formulario después de agregar el autor
      this.autor = {
        nombre: '',
        apellidos: '',
        fechaNacimiento: '',
        bibliografia: ''
      };
      alert("Autor registrado!");
    }).catch(error => {
      console.error("Error al agregar el autor:", error);
      alert("Hubo un error al registrar el autor.");
    });
  }

  returnMenu() {
    this.router.navigate(['/menu']); // Redirige al menú
  }
}
