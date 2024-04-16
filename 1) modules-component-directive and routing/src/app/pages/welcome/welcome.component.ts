import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SalutiDataService} from "../../../services/saluti-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  utente: string = "";

  titolo: string = "Benvenuti in Alphashop";
  sottoTitolo: string = "Visualizza le offerte del giorno";

  saluti:string = "";
  errore:string = "";

  constructor(private route: ActivatedRoute, private salutiSrv: SalutiDataService) { // code Injection
  }

  ngOnInit(): void {
    this.utente = this.route.snapshot.params['userid'];
  }

  /*getSaluti = (): void => {
    const str:Object = this.salutiSrv.getSaluti().subscribe(
      response => console.log(response)
    ); // il metodo subscribe, sottoscrive
    console.log(str);
  }*/

  getSaluti=()=>{
    this.salutiSrv.getSaluti().subscribe(response=> this.handleResponse(response));
  }

  getSaluti2=()=>{
    this.salutiSrv.getSaluti2(this.utente).subscribe({
      next:this.handleResponse2.bind(this),
      // this fà riferimento all'oggetto restituito dalla risposta http
      error:this.handleError.bind(this)
    });
  }
  private handleResponse2(response:Object) {
    // response rappresenta il messaggio in riposta dalla richiesta infatti è un obj
    this.saluti = response.toString();
  }
  private handleError(error:any){
    console.log(error);
    this.errore = error.error.message;
  }

  private handleResponse(response: Object) {
    this.saluti = response.toString();
    // this.saluti = response.toString();
    console.log(response);
  }



}
