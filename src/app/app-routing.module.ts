import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './administracion/administracion.component';
import { PerfilComponent } from './perfil/perfil.component';

//Hacemos que el componente perfil sea los que se muestre por defecto
//y enlacamos los distintos apartados con los botones del header
const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo:'perfil'},
{ path: 'perfil', component: PerfilComponent},
{ path: 'administracion', component: AdministracionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
