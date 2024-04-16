import {ChangeDetectorRef, Component} from '@angular/core';
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";
import {RequestService} from "./services/request.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  asyncFunction = new Promise(
    (resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    },2000)
  })
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
      time:"15:00"
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017),
      time:"15:00"
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017),
      time:"15:00"
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
      time:"15:00"
    }
  ];

  numeroCaratteri:number;
  filterString: string = '';
  strBackend: string = '';

  constructor(private cd : ChangeDetectorRef, private requestService:RequestService) {
  }

  updateViewOnValueChange(){
    console.log("print message")
    this.cd.detectChanges();
  }

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
}
