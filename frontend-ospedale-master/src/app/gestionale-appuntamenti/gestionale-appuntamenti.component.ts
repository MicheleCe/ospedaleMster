import { Component } from '@angular/core';
import { fetchService } from '../services/fetch.service';
import { ActivatedRoute } from '@angular/router';
import { Appuntamento } from '../interfaces/Appuntamento';
import { Richiesta } from '../interfaces/Richiesta';
import { Prestazione } from '../interfaces/prestazione';

@Component({
  selector: 'app-gestionale-appuntamenti',
  templateUrl: './gestionale-appuntamenti.component.html',
  styleUrls: ['./gestionale-appuntamenti.component.css']
})
export class GestionaleAppuntamentiComponent {


  constructor(
    private fetchservice: fetchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.id);
    this.returnAppuntamenti(this.numberId)
  }

  appuntamenti : Appuntamento[] = []
  selectedAppuntamentoId: number = 0
  nuovaPrestazione: Prestazione | undefined;

  richiesta : Richiesta = {

    richiestaId : 0,
    appuntamento: null,
    status: null,
    nuovaData: '',
    nuovoOrario: '',
    appuntamentoId: 0
  }


  nuovoAppuntamento : Appuntamento = {
    appuntamentoId: null,
    data: '',
    orario : '',
    ricetta : '',
    completato : false,
    prestazioneId : 0,
    pazienteId : 0,
    prestazione: null,
    paziente: null
  }

  isMedicoActive : boolean = false


  id: string | null = this.route.snapshot.paramMap.get('id');
  numberId: number = Number(this.id);

  completaAppuntamento(appuntamento : Appuntamento){
    appuntamento.completato = !appuntamento.completato
    this.fetchservice.patchAppuntamento(appuntamento)
  }

  deleteAppuntamento(id : number){
    this.fetchservice.deleteAppuntamento(id).then(()=> this.returnAppuntamenti(this.numberId))
    
  }

  bottonePostAppuntamento() {
    this.nuovoAppuntamento.pazienteId = this.numberId;
    this.nuovoAppuntamento.prestazioneId = Number(this.nuovaPrestazione?.prestazioneId);
    console.log(this.nuovoAppuntamento);
    this.fetchservice.postAppuntamento(this.nuovoAppuntamento)
  }

  bottoneModificaAppuntamento(appId : number){
    this.richiesta.appuntamentoId = appId
    console.log(this.richiesta);
    this.fetchservice.submitRichiesta(this.richiesta)
  }

  openModal(appuntamentoId: number) {
    this.selectedAppuntamentoId = appuntamentoId;
  }

  returnAppuntamenti(id: number) {
    switch (this.route.snapshot.routeConfig?.path) {
      case 'medico/:id':
        this.isMedicoActive = true
        this.fetchservice.getAppuntamentiByMedico(id).then((data) => {
          this.appuntamenti = data;
          console.log("mapping", this.appuntamenti, "notMapping", data);
        });
        break;
    
      case 'paziente/:id':
        this.fetchservice.getAppuntamentiByPaziente(id).then((data) => {
          this.appuntamenti = data;
          console.log("mapping", this.appuntamenti, "notMapping", data);
        });
        break;
    
      default:
        break;
    }
  }
  
  bottoneDeletePrestazione(id: number) {
    this.fetchservice.deletePrestazione(id);
  }
}
