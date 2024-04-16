import {ActivatedRoute, Params} from "@angular/router";
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  allowedEdit:boolean = false;

  // dato che un utente può arrivare in questo punto con activatedRoute ci possiamo
  // prendere l'id del oggetto server che lui vuole visualizzare sfruttando il service activatedRoute
  constructor(private serversService: ServersService, private routeActivated: ActivatedRoute) { }

  ngOnInit() {
    console.log('params: ' +this.routeActivated.snapshot.params['id'])
    console.log('queryParams: '+ this.routeActivated.snapshot.queryParams)
    console.log('fragment: '+ this.routeActivated.snapshot.fragment)

    const idServer = this.routeActivated.snapshot.params['id'];

    this.routeActivated.queryParams.subscribe(
        (queryParams:Params) => {
            this.allowedEdit = queryParams['allowEdit'] === '1';
          console.log(this.allowedEdit)
        }
    )
    this.server = this.serversService.getServer(idServer);

  }

/*  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }*/

}
