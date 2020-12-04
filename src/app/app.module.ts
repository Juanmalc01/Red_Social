import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { ListaPerfilesComponent } from './perfil/lista-perfiles/lista-perfiles.component';
import { DetallesUsuarioComponent } from './perfil/detalles-usuario/detalles-usuario.component';
import { ListaUsuariosComponent } from './administracion/lista-usuarios/lista-usuarios.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    AdministracionComponent,
    ListaPerfilesComponent,
    DetallesUsuarioComponent,
    ListaUsuariosComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
