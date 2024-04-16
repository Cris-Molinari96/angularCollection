import {EventEmitter, Injectable, Output} from '@angular/core';
import {Recipe} from "../models/recipe.model";
import {Subject} from "rxjs";
import {Ingredient} from "../models/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesServiceService {

  receiptsChange = new Subject<Recipe[]>();
  ingredientChange = new Subject<Ingredient[]>()

  idRe: number;
  object!:Recipe;
  private listRecipes: Recipe[] = [
    new Recipe(
      1,
      "Carbonara",
      "Spaghetti con pecorino," +
      " tuorolo d'uovo, pepe", "assets/image/carbonara.png",
      [{name: 'Eggs', amount: 4}, {name: 'Pecorino', amount: 2}]),
    new Recipe(2, "Matriciana", "spaghetti, guanciale di Amatrice, pomodori pelati e Pecorino", "assets/image/matriciana.png", [])
  ];
  @Output() recipeEmit: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() {
    this.idRe = this.listRecipes.length;
  }

  getRecipes(): Recipe[] {
    return this.listRecipes.slice();
  }

  getRecipe(id: number) {
    const item = this.listRecipes.find(
      (item) => {
        return item.id === id
      }
    )
    return item;
  }

  addReceipt(receipt: Recipe) {
    // this.idRe++;
    // receipt.id = this.idRe;
    this.listRecipes.push(receipt);
    this.receiptsChange.next(this.listRecipes.slice());
  }

  editReceipt(num: number, newReceipt: Recipe) {
    newReceipt.id = num + 1;
    this.listRecipes[num] = newReceipt;
    this.receiptsChange.next(this.listRecipes.slice());
  }

  onDeleteById(idR: number) {
    this.listRecipes.splice(
      this.listRecipes.findIndex(item => item.id === idR), 1
    )
    /*! Scritto su più righe, findIndex + Splice */
    // const recIndex:number = this.listRecipes.findIndex(
    //   (item) => {
    //     item.id === idR
    //   });
    //
    // this.listRecipes.splice( recIndex, 1);
    this.receiptsChange.next(this.listRecipes.slice());
  }

  private getIndexItem(idReceipt:number):number{
   return this.listRecipes.findIndex(item =>
       item.id === idReceipt
    );
  }

  onDeleteIngredient(idReceipt:number,i: number) {
    this. object = this.listRecipes[this.getIndexItem(idReceipt)];
    this.object.ingredients.splice(i, 1);
    this.ingredientChange.next(this.object.ingredients.slice());
  }











}
