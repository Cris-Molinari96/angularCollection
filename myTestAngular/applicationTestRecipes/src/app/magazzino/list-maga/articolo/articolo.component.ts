import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Articolo} from "../../../models/articolo.models";

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent {

  @Input() articolo!: Articolo;

  // articolo figlio di list, list figlio di magazzino

  @Output() articoloSelezionato = new EventEmitter<void>();

  infoArticolo() {
    this.articoloSelezionato.emit();
  }
}
