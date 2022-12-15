import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../modal/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(public http:HttpClient) { }

  URLBASIC = "http://localhost:8080/empleado"


  getAllEmployees():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.URLBASIC);
  }


  postEmployees(empleado:Empleado):Observable<Empleado>{
    return this.http.post<Empleado>(this.URLBASIC, empleado)
  }
}
