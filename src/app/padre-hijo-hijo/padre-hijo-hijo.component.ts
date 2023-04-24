import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-padre-hijo-hijo',
  templateUrl: './padre-hijo-hijo.component.html',
  styleUrls: ['./padre-hijo-hijo.component.css']
})
export class PadreHijoHijoComponent {

  @Input() textoHijo: string= "";

}
