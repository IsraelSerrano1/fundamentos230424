import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { EventoComponent } from './evento/evento.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { ServicioComponent } from './servicio/servicio.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { UnParametroEnviaComponent } from './un-parametro-envia/un-parametro-envia.component';
import { UnParametroRecibeComponent } from './un-parametro-recibe/un-parametro-recibe.component';
import { DosParametrosRecibeComponent } from './dos-parametros-recibe/dos-parametros-recibe.component';
import { DosParametrosEnviaComponent } from './dos-parametros-envia/dos-parametros-envia.component';
import { PadreHijoPadreComponent } from './padre-hijo-padre/padre-hijo-padre.component';
import { PadreHijoHijoComponent } from './padre-hijo-hijo/padre-hijo-hijo.component';
import { HijoPadrePadreComponent } from './hijo-padre-padre/hijo-padre-padre.component';
import { HijoPadreHijoComponent } from './hijo-padre-hijo/hijo-padre-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    OnewaybindingComponent,
    EventoComponent,
    TwowaybindingComponent,
    ServicioComponent,
    DirectivasComponent,
    UnParametroEnviaComponent,
    UnParametroRecibeComponent,
    DosParametrosRecibeComponent,
    DosParametrosEnviaComponent,
    PadreHijoPadreComponent,
    PadreHijoHijoComponent,
    HijoPadrePadreComponent,
    HijoPadreHijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
