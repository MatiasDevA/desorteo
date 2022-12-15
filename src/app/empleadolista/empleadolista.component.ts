import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../modal/empleado';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-empleadolista',
  templateUrl: './empleadolista.component.html',
  styleUrls: ['./empleadolista.component.css']
})
export class EmpleadolistaComponent implements OnInit {
  empleadoLista$:Observable<Empleado[]>
  constructor(private empleadoService:EmpleadoService,private empleservice:EmpleadoService) { }

  ngOnInit(): void {

     this.empleadoLista$ = this.empleadoService.getAllEmployees();
  }

}
