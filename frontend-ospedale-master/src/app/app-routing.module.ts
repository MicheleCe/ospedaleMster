import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PazienteComponent } from './paziente/paziente.component';
import { MedicoComponent } from './medico/medico.component';
import { DirigenteComponent } from './dirigente/dirigente.component';
import { GestionaleMediciComponent } from './gestionale-medici/gestionale-medici.component';
import { GestionaleClientiComponent } from './gestionale-clienti/gestionale-clienti.component';
import { GestionaleRichiesteComponent } from './gestionale-richieste/gestionale-richieste.component';
import { GestionaleAppuntamentiComponent } from './gestionale-appuntamenti/gestionale-appuntamenti.component';
import { GestionalePrestazioniComponent } from './gestionale-prestazioni/gestionale-prestazioni.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'paziente/:id', component: PazienteComponent },
  {path: 'medico/:id', component: MedicoComponent},
  {path:'dirigente',component: DirigenteComponent, children : [ 
    {path: 'medici', component: GestionaleMediciComponent},
    {path: 'pazienti', component: GestionaleClientiComponent},
    {path: 'appuntamenti', component: GestionaleAppuntamentiComponent},
    {path: 'prestazioni', component: GestionalePrestazioniComponent},
    {path: 'richieste', component: GestionaleRichiesteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
