import { Component } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {

  texto: string ="Esto es un evento";
  mostrarTexto(){
    
    alert(this.texto);
  }
}
