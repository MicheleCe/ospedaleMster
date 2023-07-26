import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PazienteComponent } from './paziente/paziente.component';

import { MedicoComponent } from './medico/medico.component';
import { DirigenteComponent } from './dirigente/dirigente.component';
import { GestionaleClientiComponent } from './gestionale-clienti/gestionale-clienti.component';
import { GestionaleMediciComponent } from './gestionale-medici/gestionale-medici.component';
import { GestionalePrestazioniComponent } from './gestionale-prestazioni/gestionale-prestazioni.component';
import { GestionaleRichiesteComponent } from './gestionale-richieste/gestionale-richieste.component';
import { GestionaleAppuntamentiComponent } from './gestionale-appuntamenti/gestionale-appuntamenti.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    PazienteComponent,
    MedicoComponent,
    DirigenteComponent,
    GestionaleClientiComponent,
    GestionaleMediciComponent,
    GestionalePrestazioniComponent,
    GestionaleRichiesteComponent,
    GestionaleAppuntamentiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
