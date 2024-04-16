import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  apiBaseUrl:string = 'http://localhost:8080'

  constructor(private http:HttpClient) { }

  public getString(){
    return this.http.get<any>(`${this.apiBaseUrl}/api/test/request`);
  }



}
