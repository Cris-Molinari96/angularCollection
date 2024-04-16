import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestHttpService {

  private apiUrl:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  public getData(){
    return this.http.get<any>(`${this.apiUrl}/api/test/request`)
  }
}
