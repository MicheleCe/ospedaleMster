import { Component } from '@angular/core';
import { Medico } from '../interfaces/medico';


@Component({
  selector: 'app-dirigente',
  templateUrl: './dirigente.component.html',
  styleUrls: ['./dirigente.component.css'],
})
export class DirigenteComponent {

  receivedMedici: Medico[] | undefined;

  updateMedici(receivedMed: Medico[]) {
    this.receivedMedici = receivedMed;
  }

}
