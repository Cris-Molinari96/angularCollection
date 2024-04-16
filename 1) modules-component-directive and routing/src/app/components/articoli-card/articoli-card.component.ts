import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IArticolo} from "../../models/IArticolo";

@Component({
  selector: 'app-articoli-card',
  templateUrl: './articoli-card.component.html',
  styleUrls: ['./articoli-card.component.css']
})
export class ArticoliCardComponent {

@Input() // Input --> ci permette di trasferire delle informazioni dal componente padre(grid-articoli) al componente figlio(articoli-card)
  articolo:IArticolo = {
    codArt:'',
    descrizione:'',
    um:'',
    pzCart:0,
    peso:0,
    prezzo:0,
    active:true,
    data:new Date(),
    imageUrl:''
  }

  @Output()
  delete = new EventEmitter();
  @Output()
  edit = new EventEmitter();

  editArt=() => {
    this.edit.emit(this.articolo.codArt); // ! qui stiamo passando al padre un evento con un parametro
  }
  delArt = () => {
    this.delete.emit(this.articolo.codArt); // ! qui stiamo passando al padre un evento con un parametro
  }

}
