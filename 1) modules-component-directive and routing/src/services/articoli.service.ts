import { Injectable } from '@angular/core';
import {IArticolo} from "../app/models/IArticolo";

@Injectable({
  providedIn: 'root'
})
// questo servizio servirà i nostri articoli presenti
export class ArticoliService {
articoli:IArticolo[] = [
  {codArt:'01010203', descrizione: 'Barilla farina 1kg', um:'PZ', pzCart:24, peso:1,prezzo:1.09, active:true, data:new Date(),imageUrl:"assets/images/prodotti/014600301.jpg"},
  {codArt:'01016343', descrizione: 'Barilla pasta 1.5kg', um:'PZ', pzCart:27, peso:1.5,prezzo:2.44,active:true, data:new Date(),imageUrl:"assets/images/prodotti/013500121.jpg"},
  {codArt:'34503', descrizione: 'Findus fiori di nasello 2kg', um:'PZ', pzCart:49, peso:2,prezzo:5.33,active:true, data:new Date(),imageUrl:"assets/images/prodotti/007686402.jpg"},
  {codArt:'0109763', descrizione: 'Findus pesce spada 4kg', um:'PZ', pzCart:2, peso:4,prezzo:9.99,active:true, data:new Date(),imageUrl:"assets/images/prodotti/057549001.jpg"},
]
  constructor() { }

  // ! Come faccio ad utilizzare questi due metodi?? Ricordati che devi iniettare il servizio nel componente dove utilizzerai i servizi

  // creazione di un metodo che ci restituisce tutti gli articoli presenti
  getArticoli=():IArticolo[] => this.articoli;
// questo metodo ci trovera l'index dell'articolo, iterando il nostro array di articoli, confrontando il codice che gli viene passato come parametro, quando lo trova
// l'index sarà memorizzata e ritornerà l'articolo
  getArticoloByCode=(codart:string) :IArticolo => {
    let index = this.articoli.findIndex(articolo => articolo.codArt === codart);
    return this.articoli[index];
  }

}
