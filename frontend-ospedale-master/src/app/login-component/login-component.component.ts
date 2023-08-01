import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from '../interfaces/medico';
import { Paziente } from '../interfaces/paziente';
import { fetchService } from '../services/fetch.service';
import { LogAuthService } from '../services/log.auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  constructor(private fetchservice : fetchService, private logAuth : LogAuthService, private router: Router){}

  emailLog : string = "";
  medico : Medico | null = null 
  paziente : Paziente | null = null


  async getEmailfromInput(){
    if (this.emailLog === "admin") {
      this.logAuth.role = "admin"
      this.logAuth.updateCookies()
      this.router.navigate(['/admin'])
      console.log("admin logged");
    } else {
      try {
        const medicoResponse = await this.fetchservice.getMedicoByEmail(this.emailLog);
        if (medicoResponse.status === 200 && medicoResponse.headers.get('content-type')!.includes('application/json')) {
          const medicoData = await medicoResponse.json();
          this.medico = medicoData;
          this.logAuth.id = this.medico?.medicoId!
          this.logAuth.role = "medico"
          this.logAuth.updateCookies()
          this.router.navigate(['/medico'])
          console.log(this.medico);
        } else {
          const pazienteResponse = await this.fetchservice.getPazienteByEmail(this.emailLog);
          if (pazienteResponse.status === 200 && pazienteResponse.headers.get('content-type')!.includes('application/json')) {
            const pazienteData = await pazienteResponse.json();
            this.paziente = pazienteData;
            this.logAuth.id = this.paziente?.pazienteId!
            this.logAuth.role = "paziente"
            this.logAuth.updateCookies()
            this.router.navigate(['/paziente'])
            console.log(this.paziente);
          }
        }
      } catch (error) {
        console.error(error);
      }

    }
  }
}
