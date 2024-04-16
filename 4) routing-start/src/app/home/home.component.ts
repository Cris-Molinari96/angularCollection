import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onLoadServer(id:number){

    // il metodo sta accettando un id dall'eseteerno,
    // verra renderizzato il componente con id 1 + il parametro di query + fragment
    // ci sta renderizzando verso una rotta precisa

    // il metodo sta accettando un id dall'esterno, verrà renderizzato il componente con id +
    // il parametro di query + fragment
    // ci sta renderizzando verso una rotta precisa, la quale viene resa disponibile nella configurazione delle rotte

    this.router.navigate(['server',id,'edit'], {queryParams:{allowEdit:'1'}, fragment:"loading" });
  }

  protected readonly parseInt = parseInt;
}
