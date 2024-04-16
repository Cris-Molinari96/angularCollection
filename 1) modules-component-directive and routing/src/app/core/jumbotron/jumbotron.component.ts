import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {

  @Input()
  titolo: string = "";
  @Input()
  sottoTitolo: string = "";
  @Input()
  show:boolean = true;

}
