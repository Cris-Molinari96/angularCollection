import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // * possiamo accedere al parametro dinamico di percorso ossia users/:id
  // * e recuperare quel valore o tutti i valori che vengono passati nel percorso.
  // * Il requisito è utilizzare ActivatedRoute
  user: {id: number, name: string};
  paramsSubscription:Subscription

  constructor(private userService:UsersService, private relativeRoute:ActivatedRoute) { }


  // Utilizziamo quest'oggetto user nel nostro percorso per accedere ad un determinato utente

  ngOnInit() {

    const id = this.relativeRoute.snapshot.params['id'];
    this.user = this.userService.getUser(id);


    /*this.user = {
      id:this.relativeRoute.snapshot.params['id'],
      name:this.relativeRoute.snapshot.params['name']
    };
*/
    // Params è un observable il quale emette un nuovo valore ogni
    // volta che vengono aggiornati i parametri di percorso,
    // ! Quando c'è bisogno che i parametri vengono aggiornati?
    // ! Ad esempio quando viene fatto un click su un nuovo user in questo caso
    // possiamo iscriverci a quest'evento, e aggiornare il nostro user
    this.relativeRoute.params.subscribe(
      (params:Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    )
    console.log("query "+this.relativeRoute.queryParams)
    console.log("frag "+this.relativeRoute.fragment)
  }

  // vediamo come distruggere una iscrizione ad un evento, tramite L'interfaccia onDestroy e il metodo relativo
  // utilizzando un oggetto Subscription
    // ! Angular lo farà per noi, farà questa distruzione dietro le quinte.
  /*ngOnDestroy() {
  this.paramsSubscription.unsubscribe();
  }*/

  protected readonly parseInt = parseInt;
}
