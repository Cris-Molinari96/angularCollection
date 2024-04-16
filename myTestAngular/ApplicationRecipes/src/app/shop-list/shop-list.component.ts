import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../models/ingredient.model";
import {ShoplistService} from "../services/shoplist.service";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
  providers:[]
})

export class ShopListComponent implements OnInit {

  ingredientsList!:Ingredient[];
  buttonClear:boolean = false;

  constructor(private serviceShopList : ShoplistService) {
  }

  ngOnInit() {
    this.ingredientsList = this.serviceShopList.getList();
    // ! ShopList si è correttamente registrata all'evento emesso dal service
    this.serviceShopList.ingredientListChanged.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredientsList = ingredients;
      }
    );
  }

  // In questo metodo stiamo emettendo l'index ossia la posizione dell'item selezionato.
  // Con una proprietà di tipo Subject.
  // Quest evento viene ascoltato dal componente figlio.
public editItem(index:number)  {
    this.serviceShopList.startedEditing.next(index);
  }

  public resetItem() {
    this.serviceShopList.clearButton.next(this.buttonClear = true);
  }

  public deleteItem(i: number) {
    this.serviceShopList.onDelete(i);
  }
}
