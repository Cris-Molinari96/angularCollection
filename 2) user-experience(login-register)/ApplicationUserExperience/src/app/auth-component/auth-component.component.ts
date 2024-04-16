import {Component, OnInit} from '@angular/core';
import {AxiosService} from "../service/axios.service";

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements  OnInit{

  data: string[] = [];

/** Inietto il servizio per usare il suo metodo request */
  constructor(private axiosService: AxiosService) {
  }

  /**
   * quando viene fatta una richiesta al backend viene inizializzato questo componente tramite il metodo ngOnInit e la risposta viene memorizzata nella variabile data
   */
  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      {}
    ).then(
      (response) => this.data = response.data
    );
  }
}
