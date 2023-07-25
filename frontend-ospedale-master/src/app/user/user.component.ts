import { Component } from '@angular/core';
import { fetchService } from '../services/fetch.service';
import { Paziente } from '../interfaces/paziente';
import { Router } from '@angular/router';
import { Medico } from '../interfaces/medico';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private fetchservice: fetchService, private router: Router) {}

  pazienti: Paziente[] = [];
  medici: Medico[] = [];

  numeroRichieste : number = 0

  pazienteId: string = '';

  medicId: string = '';

  ngOnInit(): void {
    this.returnPazienti()
    this.returnRichieste()
    this.returnMedici()
  }

  returnPazienti() {
    this.fetchservice.getPaziente().then((data) => {
      this.pazienti = data;
      console.log('get di pazienti', this.pazienti);
    });
  }

  returnMedici(){
    this.fetchservice.getMedico().then((data) => {
      this.medici = data;
      console.log('get di pazienti', this.medici);
    });
  }

  onSelectMedici(medicId: string) {
    this.router.navigate(['medico', this.medicId]);
  }

  onSelect(pazienteId: string) {
    this.router.navigate(['paziente', pazienteId]);
    
  }

  returnRichieste(){
    this.fetchservice.getRichieste().then((data) => {
      this.numeroRichieste = data.length;
    });
  }
}
