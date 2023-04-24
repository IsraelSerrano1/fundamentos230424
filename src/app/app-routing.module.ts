import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { EventoComponent } from './evento/evento.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { ServicioComponent } from './servicio/servicio.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { UnParametroEnviaComponent } from './un-parametro-envia/un-parametro-envia.component';
import { UnParametroRecibeComponent } from './un-parametro-recibe/un-parametro-recibe.component';
import { DosParametrosEnviaComponent } from './dos-parametros-envia/dos-parametros-envia.component';
import { DosParametrosRecibeComponent } from './dos-parametros-recibe/dos-parametros-recibe.component';
import { PadreHijoPadreComponent } from './padre-hijo-padre/padre-hijo-padre.component';
import { HijoPadrePadreComponent } from './hijo-padre-padre/hijo-padre-padre.component';

const routes: Routes = [
  {path:'interpolacion', component:InterpolacionComponent},
  {path: 'onewaybinding', component:OnewaybindingComponent},
  {path: 'evento', component:EventoComponent},
  {path: 'twowaybinding', component:TwowaybindingComponent},
  {path: 'servicio', component:ServicioComponent},
  {path: 'directivas', component:DirectivasComponent},
  {path: 'pasoUnParametro', component:UnParametroEnviaComponent},
  {path: 'pasoUnParametroRecibe/:idR', component:UnParametroRecibeComponent},
  {path: 'pasoDosParametros', component:DosParametrosEnviaComponent},
  {path: 'pasoDosParametrosRecibe', component:DosParametrosRecibeComponent},
  {path: 'padre_hijo', component:PadreHijoPadreComponent},
  {path: 'hijo_padre', component:HijoPadrePadreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
