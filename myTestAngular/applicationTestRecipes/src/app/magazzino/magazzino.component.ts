import { Component } from '@angular/core';
import {Articolo} from "../models/articolo.models";
import {MagaService} from "./maga.service";

@Component({
  selector: 'app-magazzino',
  templateUrl: './magazzino.component.html',
  styleUrls: ['./magazzino.component.css'],
  providers:[MagaService]
})
export class MagazzinoComponent {
  showDetails!: Articolo;

}
