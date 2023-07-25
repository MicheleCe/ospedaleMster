import { Component, EventEmitter, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Paziente } from '../interfaces/paziente';
import { fetchService } from '../services/fetch.service';


@Component({
  selector: 'app-gestional-clienti',
  templateUrl: './gestional-clienti.component.html',
  styleUrls: ['./gestional-clienti.component.css'],
})
export class GestionalClientiComponent implements OnInit {
  constructor(private fetchservice: fetchService) {}
  
  pazienti: Paziente[] = [];

  ngOnInit(): void {
    this.returnPazienti();
  }


  medicoId = 0;
  firstName = '';
  lastName = '';
  codiceFiscale = '';
  active = '';
  email = '';
  medico = '';
  tipologia = '';

  returnPazienti() {
    this.fetchservice.getPaziente().then((data) => {
      this.pazienti = data;
      console.log('get di pazienti', this.pazienti);
    });
  }

  bottonePaziente() {
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      codiceFiscale: this.codiceFiscale,
      email: this.email,
    };
    this.fetchservice.submitPaziente(data).then((data) => {console.log(data), this.returnPazienti()});
   
  }

  bottoneDeletePaziente(id: number) {
    this.fetchservice.deletePaziente(id).then(() => this.returnPazienti());
  }
}
