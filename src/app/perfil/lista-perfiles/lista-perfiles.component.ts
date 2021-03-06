import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Usuarios } from 'models/usuarios.model';

@Component({
  selector: 'app-lista-perfiles',
  templateUrl: './lista-perfiles.component.html',
  styleUrls: ['./lista-perfiles.component.css']
})
export class ListaPerfilesComponent implements OnInit {

      nombre: string
      apellidos: string
      edad:  number
      descripcion: string
      correo: string
      contrasena: string
      ConfirmarContrasena: string

  // Creamos un emisor de eventos que enviará el usuario creado
  @Output() usuarioEvent = new EventEmitter<Usuarios>();

  // Inicializo la variable formBuilder
  constructor(private formBuilder: FormBuilder) {
    // Pongo las condiciones de los campos
    this.user = this.formBuilder.group({

       nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      edad:  ['', Validators.required],
      descripcion: ['', [Validators.required,Validators.minLength(4)]],
      correo: ['', [Validators.required,Validators.email]],
      contrasena: ['', Validators.required],
      ConfirmarContrasena: ['', Validators.required]
    });
  }

  // Creo la variable user donde almaceno los datos que recibo del formulario
  user: FormGroup;
  submitted = false;

  usuario = new Usuarios('','', 0,'','','','');

  ngOnInit(): void {


  }

   // Creamos un metodo para facilitar el acceso a los controles de formulario desde la plantilla
   get f(){
    return this.user.controls;
  }


  // Metodo enviar
  enviarDatos(Vnombre, Vapellido, Vedad, Vdesc, Vemail, Vcontra, VConfirmContra){
    this.user;
    this.submitted = true;
    // Si algun campo no cumple las condiciones
    if(this.user.invalid){
      return;
    }




    this.guardar(Vnombre, Vapellido, Vedad, Vdesc, Vemail, Vcontra, VConfirmContra);

    // Si todos los campos son correctos muestra la siguiente ventana emergente
      Swal.fire('Usuario creado correctamente 🍆');
  }

  guardar(Vnombre, Vapellido, Vedad, Vdesc, Vemail, Vcontra, VConfirmContra): void{

      this.nombre = Vnombre;
      this.apellidos = Vapellido;
      this.edad =  Vedad;
      this.descripcion = Vdesc;
      this.correo = Vemail;
      this.contrasena = Vcontra;
      this.ConfirmarContrasena = VConfirmContra;
      this.enviar();

  }

  enviar(): void{
    this.usuarioEvent.emit(new Usuarios (this.nombre, this.apellidos, this.edad, this.descripcion, this.correo, this.contrasena, this.ConfirmarContrasena));
  }

}
