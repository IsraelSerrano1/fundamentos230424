import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-un-parametro-recibe',
  templateUrl: './un-parametro-recibe.component.html',
  styleUrls: ['./un-parametro-recibe.component.css']
})
export class UnParametroRecibeComponent {

  idR:number =0;

  constructor(private activar: ActivatedRoute){
    this.idR= this.activar.snapshot.params['idR']
    console.log(this.idR)
  }

}
