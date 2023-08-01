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
import { LoginComponentComponent } from './login-component/login-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponentComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'paziente/:id', component: PazienteComponent },
  { path: 'medico/:id', component: MedicoComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
