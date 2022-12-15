import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaempleadoComponent } from './cargaempleado/cargaempleado.component';
import { EmpleadolistaComponent } from './empleadolista/empleadolista.component';
import { MainComponent } from './main/main.component';
import { SorteoComunComponent } from './sorteo-comun/sorteo-comun.component';
import { SorteoPersonalizadoComponent } from './sorteo-personalizado/sorteo-personalizado.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:MainComponent, children:[
    {path: "lista", component:EmpleadolistaComponent},
    {path:"cargar", component:CargaempleadoComponent},
    {path: "sorteo", component:SorteoComunComponent},
    {path: "sorteo/personalizado", component:SorteoPersonalizadoComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
