import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Area Server';
  listServer = [
    {type:'server',name:'testServer',content:'contentServerTest'},
    {type:'server',name:'testServer2',content:'contentServerTest2'}
  ];


  onAddServer(serverData:{serverName:string, serverContent:string}){
    this.listServer.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    });
  }
 }
