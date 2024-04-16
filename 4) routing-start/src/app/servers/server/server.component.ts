import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute,
              private route:Router) {
  }

  ngOnInit() {
    const id: number = parseInt(this.activatedRoute.snapshot.params['id']);

    this.server = this.serversService.getServer(id);

    this.server = {
      id:this.activatedRoute.snapshot.params['id'],
      name:this.activatedRoute.snapshot.params['name'],
      status:this.server.status
    }

    this.activatedRoute.params.subscribe(
      (params:Params) => {
        const idNum= parseInt(this.activatedRoute.snapshot.params['id']);
        this.server = this.serversService.getServer(idNum);
      }
    )

    console.log("query "+this.activatedRoute.queryParams)
    console.log("frag "+this.activatedRoute.fragment)
  }

  // non c'è bisogno di mettere un parametro nel metodo, perchè quando viene cliccato il server allora
  // comparirà la possibilità di aggiornarlo
  onEditServer() {
    // this.route.navigate(['/servers', this.server.id,'edit'])
    // * dato che stiamo usando lo stesso percorso 'server', possiamo usare la proprietà percorso relativo per
    // * fare riferimento al percorso attuale
    this.route.navigate(['edit'], {relativeTo:this.activatedRoute})

  }
}
