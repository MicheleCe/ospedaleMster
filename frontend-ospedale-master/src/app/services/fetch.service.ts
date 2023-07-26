import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class fetchService {

  pazienti: any;
  medici: any;
  prestazioni: any;

  /* GET */

  getPaziente(){
    return fetch('http://localhost:8080/ospedale/v1/getPazienti',{
      method:'GET',
    }).then(response =>response.json())/* .then(data =>{return data}) *//* .then(data => {this.pazienti = data; console.log(this.pazienti);}) */
  }

  getPazienteById(id: number){
    return fetch(`http://localhost:8080/ospedale/v1/getPazienteById/${id}`,{
      method:'GET',
    }).then(response =>response.json()).then(data =>{return data})
  }

  getAppuntamentiByPaziente(id:number) {
    return fetch(`http://localhost:8080/ospedale/v1/getAppuntamentoByPazienteId/${id}`,{
      method:'GET',
    }).then(response =>response.json()).then(data =>{return data})
  }

  getAppuntamentiByMedico(id:number) {
    return fetch(`http://localhost:8080/ospedale/v1/getAppuntamentoByMedicoId/${id}`,{
      method:'GET',
    }).then(response =>response.json()).then(data =>{return data})
  }

  
  getMedico(){
    return fetch('http://localhost:8080/ospedale/v1/getMedico',{
      method:'GET',
    }).then(response =>response.json())/* .then(data => {this.medici = data; console.log(this.medici);
    }) */

  }

  getMedicoById(id: number){
    return fetch(`http://localhost:8080/ospedale/v1/getMedico/${id}`,{
      method:'GET',
    }).then(response =>response.json()).then(data =>{return data})
  }

  getPrestazioni(){
    return fetch('http://localhost:8080/ospedale/v1/getPrestazioni',{
      method:'GET',
    }).then(response =>response.json())/* .then(data => {this.prestazioni = data; console.log(this.prestazioni);
    }) */

  }

  getRichieste() {
    return fetch('http://localhost:8080/ospedale/v1/getRichieste',{
      method:'GET',
    }).then(response =>response.json())
  }

  /* POST */

  postAppuntamento(data:object){
    console.log("post prestazione", data);

    return fetch('http://localhost:8080/ospedale/v1/postAppuntamento',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":'application/json;charset=utf-8'
      }
    }).then(response =>response.json())
  }

  patchAppuntamento(data:object){
    console.log("post prestazione", data);

    return fetch('http://localhost:8080/ospedale/v1/patchAppuntamento',{
      method:'PATCH',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":'application/json;charset=utf-8'
      }
    }).then(response =>response.json())
  }

  patchRichiesta(data : object){
    console.log("post prestazione", data);

    return fetch('http://localhost:8080/ospedale/v1/patchRichiesta',{
      method:'PATCH',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":'application/json;charset=utf-8'
      }
    }).then(response =>response.json())
  }

  patchMedico(data:object){
    console.log("post prestazione", data);

    return fetch('http://localhost:8080/ospedale/v1/patchMedico',{
      method:'PATCH',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":'application/json;charset=utf-8'
      }
    }).then(response =>response.json())
  }


  submitPaziente(data:object){
    return fetch('http://localhost:8080/ospedale/v1/postPaziente',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":'application/json;charset=utf-8'
      }
    }).then(response =>response.json()) /* .then(data => console.log(data) */
  }


  submitMedico(data:object){
    return fetch('http://localhost:8080/ospedale/v1/postMedico',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":'application/json;charset=utf-8'
      }
    }).then(response =>response.json())/* .then(data => console.log(data)) */
  }


  submitPrestazione(data:object){
    console.log("post prestazione", data);

    return fetch('http://localhost:8080/ospedale/v1/postPrestazione',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":'application/json;charset=utf-8'
      }
    }).then(response =>response.json())/* .then(data => console.log(data)) */
  }

  submitRichiesta(data:object){
    console.log("post prestazione", data);

    return fetch('http://localhost:8080/ospedale/v1/postRichiesta',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":'application/json;charset=utf-8'
      }
    }).then(response =>response.json())
  }

  /* DELETE */

  deletePaziente(id:number){
    return fetch(`http://localhost:8080/ospedale/v1/deletePaziente${id}`,{
      method:"DELETE"
    })
  }

  deleteMedico(id:number){
    return fetch(`http://localhost:8080/ospedale/v1/medico/${id}`,{
      method:"DELETE"
    })
  }

  deletePrestazione(id:number){
    return fetch(`http://localhost:8080/ospedale/v1/deletePrestazione${id}`,{
      method:"DELETE"
    })
  }

  deleteRichiesta(id:number){
    return fetch(`http://localhost:8080/ospedale/v1/deleteRichiesta/${id}`,{
      method:"DELETE"
    })
  }

  deleteAppuntamento(id:number){
    return fetch(`http://localhost:8080/ospedale/v1/deleteAppuntamento/${id}`,{
      method:"DELETE"
    })
  }



}
