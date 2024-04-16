import { Component } from '@angular/core';
import {AuthappService} from "../../../services/authapp.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    // ! code injection del servizio per visualizzare o meno l'utente dopo che si è autenticato inoltre viene determinata la logica di viusalizzazione del pulsante logout
  constructor(protected basicAuth:AuthappService) {
  }

}
