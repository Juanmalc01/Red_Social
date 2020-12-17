import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuarios } from 'models/usuarios.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuariosArray: Usuarios[] = [];

  constructor() { }

  //Creamos los usuarios y los introducimos en la array
  ngOnInit(): void {
    this.usuariosArray.push(new Usuarios('Pedro', 'Sanchez',43, 'Esto es una decripcion de ejemplo B)', 'pedro@gmail.com','Pedro123$','Pedro123$' ));
    this.usuariosArray.push(new Usuarios('Juan', 'Perez', 24, 'Esto es una decripcion de ejemplo B)', 'juan@gmail.com','Juan123$','Juan123$'));
    this.usuariosArray.push(new Usuarios('Roberto', 'Garcia', 33, 'Esto es una decripcion de ejemplo B)', 'roberto@gmail.com','Roberto123$','Roberto123$'));
  }


  // Esta funcion elimina un usuario
  deleteUsuario(i) {

    // Mediante el SweetAlert mostramos un mensaje al eliminar un usuario
    Swal.fire({
      title: '¿Estas seguro?',
      text: "No podras deshacer los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuariosArray.splice(i,1)

        Swal.fire(
          'Eliminado correctamente',
          'El usuario a sido eliminado',
          'success'
        )
      }
    })
  }

}
