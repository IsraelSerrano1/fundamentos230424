import { Component } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-dos-parametros-recibe',
  templateUrl: './dos-parametros-recibe.component.html',
  styleUrls: ['./dos-parametros-recibe.component.css']
})
export class DosParametrosRecibeComponent {
  id:number= 0;
  nombre:string="";
  constructor(private activar:ActivatedRoute){
    

  }
  ngOnInit(){
    this.id = this.activar.snapshot.queryParams['action']
    console.log("recibe id " + this.id)
    this.nombre = this.activar.snapshot.queryParams['nombre']    
    console.log("recibe nombre " + this.nombre)

  }
}
