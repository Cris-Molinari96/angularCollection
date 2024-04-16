import { Component } from '@angular/core';
import {IArticolo} from "../../models/IArticolo";

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent  {
  // ! l'obiettivo è mostrare questi articoli sulla pagina web
  // * In seguito abbiamo aggiunto :IArticolo[] che è un interfaccia che rappresenta l'articolo, ed è possibile utilizzarlo
  // * in questo modo articoli:IArticoli[]
  articoli:IArticolo[] = [
    {codArt:'01010203', descrizione: 'Barilla farina 1kg', um:'PZ', pzCart:24, peso:1,prezzo:1.09, active:true, data:new Date(),imageUrl:"assets/images/prodotti"},
    {codArt:'01016343', descrizione: 'Barilla pasta 1.5kg', um:'PZ', pzCart:27, peso:1.5,prezzo:2.44,active:true, data:new Date(),imageUrl:"assets/images/prodotti"},
    {codArt:'34503', descrizione: 'Findus bastoncini 2kg', um:'PZ', pzCart:49, peso:2,prezzo:5.33,active:true, data:new Date(),imageUrl:"assets/images/prodotti"},
    {codArt:'0109763', descrizione: 'Findus pesce spada 4kg', um:'PZ', pzCart:2, peso:4,prezzo:9.99,active:true, data:new Date(),imageUrl:"assets/images/prodotti"},
  ]
}
