import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-hijo-padre',
  templateUrl: './padre-hijo-padre.component.html',
  styleUrls: ['./padre-hijo-padre.component.css']
})
export class PadreHijoPadreComponent {
  textoPadre: string ="Este es el texto que se pasa al hijo desde el padre";

}
