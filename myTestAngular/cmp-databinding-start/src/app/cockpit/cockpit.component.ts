import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  serverName = '';
  serverContent = '';

  // questi dati saranno inviati all'app.component.html il quale a sua volta in base a degli eventi,
  // userà proprietà o metodi della classe app.component.ts

  @Output()serverCreated = new EventEmitter<{serverName:string, serverContent:string}>;
  @Output()blueprintCreated= new EventEmitter<{serverName:string, serverContent:string}>;

  constructor() { }

  ngOnInit(): void {
  }
// questi dati devono essere inviati quando viene attivato il metodo,
  // eventEmitter ci consente di poter inviare i dati allo scatenarsi di un evento
  onAddServer(nameInput) {
    console.log(nameInput);
    this.serverCreated.emit({serverName:this.serverName, serverContent:this.serverContent})
  }
// questi dati devono essere inviati quando viene attivato il metodo,
  // eventEmitter ci consente di poter inviare i dati allo scatenarsi di un evento
  onAddBlueprint() {
    this.blueprintCreated.emit({serverName:this.serverName, serverContent:this.serverContent})
  }
}
