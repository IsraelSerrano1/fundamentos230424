import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }
  
  texto: string="Hola Mundo";

  mostrarAlert(){

    alert(this.texto);
  }
}
