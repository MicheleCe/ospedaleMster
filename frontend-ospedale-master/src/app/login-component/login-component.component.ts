import { Component } from '@angular/core';
import { fetchService } from '../services/fetch.service';
import { Medico } from '../interfaces/medico';
import { Paziente } from '../interfaces/paziente';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  constructor(private fetchservice : fetchService){}

  emailLog : string = "";
  medico : Medico | null = null 
  paziente : Paziente | null = null


  async getEmailfromInput(){
    if (this.emailLog === "admin") {
      console.log("admin logged");
    } else {
      try {
        const medicoResponse = await this.fetchservice.getMedicoByEmail(this.emailLog);
        if (medicoResponse.status === 200 && medicoResponse.headers.get('content-type')!.includes('application/json')) {
          const medicoData = await medicoResponse.json();
          this.medico = medicoData;
          console.log(this.medico);
        } else {
          const pazienteResponse = await this.fetchservice.getPazienteByEmail(this.emailLog);
          if (pazienteResponse.status === 200 && pazienteResponse.headers.get('content-type')!.includes('application/json')) {
            const pazienteData = await pazienteResponse.json();
            this.paziente = pazienteData;
            console.log(this.paziente);
          }
        }
      } catch (error) {
        console.error(error);
      }

    }
  }
}
