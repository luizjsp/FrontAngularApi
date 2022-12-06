import { Component, OnInit } from '@angular/core';
import { PacientesService } from './services/pacientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontangularapi';

  
  pacientes: any;

  constructor(
    private pacientesService: PacientesService

  ) {}



ngOnInit() {

  this.getPacientes();

}

  getPacientes() { this.pacientesService.getPacientes().subscribe((dados) => {
  //    console.log(dados)
   this.pacientes = dados;
  });


  
  //this.pacientesService.getPacientes().subscribe((pacientes) => {
  //console.log(pacientes);
  // this.pacientes = pacientes;

//},
//(error) => {console.log(error);
// });
  

}


}
