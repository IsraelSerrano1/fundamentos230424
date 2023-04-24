import { Component } from '@angular/core';
import { libros } from '../_modelo/prueba_for';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
 
  texto: string="";
  registrado: boolean= false;
  
  libros= Object.values(libros)
  numero = "";

  testngIf(){    

    this.registrado = true

    this.texto="has pulsado el botón para comprobar el ngIf"
  }

}
