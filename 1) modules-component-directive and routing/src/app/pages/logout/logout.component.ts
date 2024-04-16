import {Component, OnInit} from '@angular/core';
import {AuthappService} from "../../../services/authapp.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  // utili
  constructor(private basicAuth: AuthappService) {
  }

  ngOnInit(): void {
    // ! il metodo onInit viene richiamato quando viene inizializzato il componente Logout, ossia quando il pulsante viene cliccato
    // ! eseguendo quello che c'è nel corpo del metodo!
    console.log("Il componente è stato inizializzato!")
    this.basicAuth.clearUser();
    this.basicAuth.clearAll();
  }
}
