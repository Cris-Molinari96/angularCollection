import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-handler-server',
  templateUrl: './handler-server.component.html',
  styleUrls: ['./handler-server.component.css']
})
export class HandlerServerComponent {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>
  serverName:string = "";
  serverContent:string = "";



  onAddServer() {
    this.serverCreated.emit({serverName:this.serverName, serverContent:this.serverContent});
  }
}
