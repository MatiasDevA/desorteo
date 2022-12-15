import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from '../modal/empleado';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-cargaempleado',
  templateUrl: './cargaempleado.component.html',
  styleUrls: ['./cargaempleado.component.css']
})
export class CargaempleadoComponent implements OnInit {
  empleado:Empleado = {
    nombre: '',
    apellido: '',
    edad: 0,
    email: ''
  }
  errorMensaje: Array<String>


  constructor(private empleadoService:EmpleadoService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.empleado)
    this.empleadoService.postEmployees(this.empleado).subscribe( (empleado)=> {
      console.log(empleado)
      this.toastr.success('Se ha agregado a la lista ' + empleado.nombre, 'Correcto');
    }, (err) => {
      this.errorMensaje = err.error
     console.log(this.errorMensaje);
    });
  }

}
