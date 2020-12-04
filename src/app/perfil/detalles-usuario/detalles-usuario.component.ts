import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuarios } from 'models/usuarios.model';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.css']
})
export class DetallesUsuarioComponent implements OnInit {

  @Input() usuario: Usuarios;
  @Output() saveEvent: EventEmitter<Usuarios> = new EventEmitter<Usuarios>();
  @Output() deleteEvent: EventEmitter<Usuarios> = new EventEmitter<Usuarios>();

  constructor() { }

  ngOnInit(): void {
  }

  //Funcion para guardar los cambios
  saveUsuario(): void {
    this.saveEvent.emit(this.usuario);
  }

}
