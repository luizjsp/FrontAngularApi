import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http: HttpClient) { }

  SERVER_URL = 'http://localhost:8080/api/paciente'

  public getPacientes(){
    return this.http.get(`${this.SERVER_URL}/listarPacientes`)
  }
}
