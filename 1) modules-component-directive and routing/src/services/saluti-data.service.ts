import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SalutiDataService {

  constructor(private httpClient:HttpClient) { }

  getSaluti=():Observable<Object>=> {
    return this.httpClient.get("http://localhost:8050/api/saluti")
  }

  getSaluti2=(nome:string) => {
    return this.httpClient.get("http://localhost:8050/api/saluti/" + nome);
  }

  /*getSaluti=():string=> {
    return "Hai cliccato, il service è stato iniettato correttamente nella welcome"
  }*/
}
