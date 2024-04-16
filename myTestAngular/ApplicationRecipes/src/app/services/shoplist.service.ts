import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../models/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoplistService {

  ingredientListChanged = new EventEmitter<Ingredient[]>()
  startedEditing = new Subject<number>();
  clearButton = new Subject<boolean>()


  private ingredientsList:Ingredient[] = [
    new Ingredient("Red Eggs",4),
  ];

  constructor() { }

  // * Dato che non riceviamo più l'array originale se provassimo senza l'aggiunta di ingredientList(variabile usata per emettere un evento)
  // * non visualizziamo più l'array originale ma la copia che viene passata una sola volta.
  getList(){
    return this.ingredientsList.slice();
  }

  getIngredient(index:number):Ingredient{
    return this.ingredientsList[index];
  }

  onAddItem(ingredient:Ingredient){
    this.ingredientsList.push(ingredient);
    // ! Qui stiamo emettendo il nuovo array con l'aggiunta degli ingredienti, shopList si registrerà a quest'evento
    // ! per aggiornare la lista
    this.ingredientListChanged.emit(this.ingredientsList.slice());
  }

  // Questo codice ci aiuta nel fare un update in un item,
  // ponendolo = al nuovo ingrediente, prima però recuperiamo la
  // index dell'item da aggiornare
  editItem(index:any, newIngredient:Ingredient){
    this.ingredientsList[index] = newIngredient;
    this.ingredientListChanged.next(this.ingredientsList.slice());
  }

  onDelete(index:number){
    this.ingredientsList.splice(index, 1);
    this.ingredientListChanged.next(this.ingredientsList.slice())
  }

}
