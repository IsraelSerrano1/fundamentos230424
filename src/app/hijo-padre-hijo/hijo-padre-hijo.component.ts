import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-padre-hijo',
  templateUrl: './hijo-padre-hijo.component.html',
  styleUrls: ['./hijo-padre-hijo.component.css']
})
export class HijoPadreHijoComponent {

  cadenaHijo: string ="Esta es la cadena que se envía del hijo al padre"
 @Output() enviarDatos = new EventEmitter<string>();

ngOnInit(){
  this.enviarDatos.emit(this.cadenaHijo);
}

}
