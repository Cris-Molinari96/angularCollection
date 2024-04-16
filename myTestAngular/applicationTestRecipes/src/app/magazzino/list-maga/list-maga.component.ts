import {Component, EventEmitter, Output} from '@angular/core';
import {Articolo} from "../../models/articolo.models";

@Component({
  selector: 'app-list-maga',
  templateUrl: './list-maga.component.html',
  styleUrls: ['./list-maga.component.css']
})
export class ListMagaComponent {
  @Output() articoloSelected = new EventEmitter<Articolo>();

  listArticolo:Articolo[] = [
    new Articolo("Pc msi","Pg gaming 4k 120fps, nvidia 1360 qb","././assets/image/msi.png","800€"),
    new Articolo("Apple","Pg editing 4k 120fps, nvidia 2060 qb","././assets/image/apple.png","2499€"),
    new Articolo("Chormecast","Pg to work","././assets/image/chromeCast.png","899€")
  ];

  infoArticolo(articoloEl: Articolo) {
    this.articoloSelected.emit(articoloEl);
  }
}
