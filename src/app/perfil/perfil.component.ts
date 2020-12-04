import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'models/usuarios.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  usuariosArray: Usuarios[] = [];
  usuarioSelected: Usuarios = null;
  isCreatingNewUsu: boolean = false;

  // Creamos los 3 usuarios de ejemplo
  ngOnInit(): void {
    this.usuariosArray.push(new Usuarios('Pedro', 'Sanchez',43, 'Esto es una decripcion de ejemplo B)', 'pedro@gmail.com','Pedro123$','Pedro123$'));
    this.usuariosArray.push(new Usuarios('Juan', 'Perez', 24, 'Esto es una decripcion de ejemplo B)', 'juan@gmail.com','Juan123$', 'Juan123$'));
    this.usuariosArray.push(new Usuarios('Roberto', 'Garcia', 33, 'Esto es una decripcion de ejemplo B)', 'roberto@gmail.com','Roberto123$','Roberto123$' ));
  }

  // Esta funcion se ejecutara al hacer click sobre uno de los usuarios
  selectUsuario(usuario: Usuarios): void {

    // Quitamos la interfaz de crear un usuario
    this.isCreatingNewUsu = false;

    // Guardamos en una variable de la clase el usuario seleccionado
    this.usuarioSelected = usuario;

  }

  // Esta funcion edita el usuario
  updateUsuario(usuario: Usuarios): void {

    // Ponemos el valor en null para que desaparezcan los detalles
    this.usuarioSelected = null;

    // Buscamos un personaje con el mismo nombre y lo editamos
    for (let i = 0; i < this.usuariosArray.length; i++) {
      if (this.usuariosArray[i].nombre === usuario.nombre) {
        this.usuariosArray[i].apellidos = usuario.apellidos;
        this.usuariosArray[i].edad = usuario.edad;
        this.usuariosArray[i].descripcion = usuario.descripcion;
        this.usuariosArray[i].correo = usuario.correo;
        this.usuariosArray[i].contrasena = usuario.contrasena;
        this.usuariosArray[i].ConfirmarContrasena = usuario.ConfirmarContrasena;
      }
    }
  }

  // Funcion para añadir un nuevo usuario en el array
  addUsuario(newUsuario: Usuarios): void {
    this.usuariosArray.push(newUsuario);
  }

}
