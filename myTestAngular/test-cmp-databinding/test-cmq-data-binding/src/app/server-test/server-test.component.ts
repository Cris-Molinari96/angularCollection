import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-server-test',
  templateUrl: './server-test.component.html',
  styleUrls: ['./server-test.component.css']
})
export class ServerTestComponent {

  @Input('srv') element:{type:string, name:string, content:string};

}
