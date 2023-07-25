import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { fetchService } from '../services/fetch.service';
import { Medico } from '../interfaces/medico';

@Component({
  selector: 'app-gestionale-medici',
  templateUrl: './gestionale-medici.component.html',
  styleUrls: ['./gestionale-medici.component.css'],
})
export class GestionaleMediciComponent implements OnInit {
  
  constructor(private fetchservice: fetchService) {}

  @Output() mediciEvent = new EventEmitter<Medico[]>();

  medici: Medico[] = [];

  medicoId = 0;
  firstName = '';
  lastName = '';
  codiceFiscale = '';
  active = '';
  email = '';
  medico = '';
  tipologia = '';

  ngOnInit(): void {
    this.returnMedici();
  }

  returnMedici() {
    this.fetchservice.getMedico().then((data) => {
      this.medici = data;
      this.mediciEvent.emit(this.medici);
      console.log('get medici', this.medici);
    });
  }

  bottoneMedico() {
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      active: this.active,
      email: this.email,
    };
    this.fetchservice.submitMedico(data).then((data) => {
      console.log(data), this.returnMedici();
    });
  }

  bottoneDeleteMedico(id: number) {
    this.fetchservice.deleteMedico(id).then(() => this.returnMedici());
  }

  isMedicoActive(medico : Medico){
    medico.active = !medico.active
      console.log(medico.active);
      this.fetchservice.patchMedico(medico)
  }

  
}
