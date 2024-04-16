import {Component, Input} from '@angular/core';
import {Articolo} from "../../models/articolo.models";

@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.css']
})
export class DetailsItemComponent {
@Input() articolo!:Articolo;
}
