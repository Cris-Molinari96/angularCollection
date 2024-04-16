import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthappService} from "../../../services/authapp.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//! proprietà del login
  userID: string = "";
  password: string = "";
  autenticato: boolean = true;
  errMsg: string = "password e/o username sono errati";
  titolo:string = "Accesso & Autenticazione";
  sottotitolo:string = "Procedi ad inserire la userid e la password";


  constructor(private route: Router, private basicAuth:AuthappService) { // <-- code injection
  }
  gestAuth = (): void => {
    if (this.basicAuth.autenticazione(this.userID,this.password)) {
      this.route.navigate(['welcome', this.userID]); // aggiunto la rotta nel caso il login ha successo, si porta dietro il parametro
      this.autenticato = true;
      // this.consentito = true;
    } else {
      this.autenticato = false;
      // this.consentito = false;
    }
  }
}
