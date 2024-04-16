import {Component} from "@angular/core";

@Component({
  selector:'app-server',
  templateUrl:'./server.component.html',
  styles:[`.online{
    color: darkblue;
  }`]
})

export class ServerComponent{
  allowNewServer:boolean = false;
  // possiamo assegnare un valore random in base ad una condizione utilizzando il ternary
  serverStatus:string = Math.random() > 0.5 ? 'offline' : 'online';
  serverCreated: string = "";
  serverName:string ="";
  boolServer:boolean = false;
  errMessageServer:string="";

  serversList:[string] = ['TestServer'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
    console.log(this.serverStatus)
  }

  getServerStatus():string{
    return this.serverStatus;
  }

  onServerCreated(){
    if(this.serverName === ''){
      this.errMessageServer = "Bad request, not server was created."
    }else{
      this.serverCreated = "New server added " + this.serverName;
      this.boolServer = true;
      this.serversList.push(this.serverName);
    }
  }

  resetServerInfo(){
    this.serverName = '';
    this.serverCreated = '';
    this.boolServer = false;
  }

  /*
  updateServer(event:Event){
    if(this.serverName.trim()){
      this.serverName = "You can insert a a name of server for create a new server.";
    }else{
      this.serverName = (<HTMLInputElement>event.target).value; // estraiamo il valore dell'input in questo modo
      this.serverCreated = "Server created with success!";
    }
    this.serverName = (<HTMLInputElement>event.target).value; // estraiamo il valore dell'input in questo modo
  }
    */

  getColor():string{
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }

}
