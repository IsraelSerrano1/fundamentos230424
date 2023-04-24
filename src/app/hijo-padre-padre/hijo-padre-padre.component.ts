import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo-padre-padre',
  templateUrl: './hijo-padre-padre.component.html',
  styleUrls: ['./hijo-padre-padre.component.css']
})
export class HijoPadrePadreComponent {
  cadenaPadre: string="";

  datos(cadenaHijo:string){
    this.cadenaPadre=cadenaHijo;
  }
}
