import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fetchService } from '../services/fetch.service';
import { Prestazione } from '../interfaces/prestazione';
import { Medico } from '../interfaces/medico';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-gestionale-prestazioni',
  templateUrl: './gestionale-prestazioni.component.html',
  styleUrls: ['./gestionale-prestazioni.component.css']
})
export class GestionalePrestazioniComponent implements OnInit{
  constructor(private fetchservice: fetchService,  private route: ActivatedRoute) {}
  
  @Input() receivedMedici: Medico[] | undefined;

  @Output() prenotazionePrestazione = new EventEmitter<Prestazione>();
  
  isDirigenteActive: boolean = false
  isSetPrestazioneActive: boolean = false 

  renderPutPrestazioni(){
    if (this.route.snapshot.routeConfig?.path == 'dirigente') {
      this.isDirigenteActive = true} else (this.isSetPrestazioneActive = true )
  } 
  prestazioni: Prestazione[] = [];

  medicoId = 0;
  firstName = '';
  lastName = '';
  codiceFiscale = '';
  active = '';
  email = '';
  medico = '';
  tipologia = '';

  ngOnInit(): void {
    this.returnPrestazioni();
    this.renderPutPrestazioni()
  }

  returnPrestazioni() {
    this.fetchservice.getPrestazioni().then((data) => {
      this.prestazioni = data;
      console.log("route", this.route.snapshot.routeConfig?.path);
    });
  }

  bottonePrestazione() {
    const data = {
      tipologia: this.tipologia,
      medicoId: this.medicoId,
    };
    this.fetchservice.submitPrestazione(data).then((data) => {console.log(data), this.returnPrestazioni()});
  }

  bottoneDeletePrestazione(id: number) {
    this.fetchservice.deletePrestazione(id).then(()=> this.returnPrestazioni());
  }

  prenotaPrestazione(data : any){
    this.prenotazionePrestazione.emit(data);
  }

}
