import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { EmpleadolistaComponent } from './empleadolista/empleadolista.component';
import { CargaempleadoComponent } from './cargaempleado/cargaempleado.component';
import { SorteoComunComponent } from './sorteo-comun/sorteo-comun.component';
import { SorteoPersonalizadoComponent } from './sorteo-personalizado/sorteo-personalizado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    EmpleadolistaComponent,
    CargaempleadoComponent,
    SorteoComunComponent,
    SorteoPersonalizadoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
