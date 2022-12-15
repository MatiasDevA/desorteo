import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { Empleado } from '../modal/empleado';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-sorteo-comun',
  templateUrl: './sorteo-comun.component.html',
  styleUrls: ['./sorteo-comun.component.css']
})
export class SorteoComunComponent implements OnInit {
  listaEmpleados: Empleado[];
  constructor(private empleadoService: EmpleadoService,  private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  sorteoEmpleado(total: HTMLInputElement, sorteado: HTMLInputElement) {

    if(total > sorteado){
      this.toastr.error(' el numero de empleados en Total :' + total +'No puede superar a la cantidad de Sorteados :' + sorteado)
    } else {
    this.empleadoService
      .getAllEmployees()
      .pipe(
        map((empleado) => {
          let listaRandom: Empleado[] = [];
          while (listaRandom.length < sorteado.valueAsNumber) {
            let sorteoEmpleado = Math.floor(Math.random() * empleado.length);
            let estado: boolean = false;
            for (let i = 0; i < listaRandom.length; i++) {
              if (listaRandom[i] == empleado[sorteoEmpleado]) {
                estado = true;
                break;
              }
            }
            if (!estado) {
              listaRandom[listaRandom.length] = empleado[sorteoEmpleado];
            }
          }
          return listaRandom;
        })
      )
      .subscribe((empleado) => {
       this.listaEmpleados = empleado
      });
  }

}

}
