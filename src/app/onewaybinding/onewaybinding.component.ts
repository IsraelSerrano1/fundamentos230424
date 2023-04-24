import { Component } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent {

  checked: boolean=true;
  cambioEstado(){
    this.checked=!this.checked;
  }

}
