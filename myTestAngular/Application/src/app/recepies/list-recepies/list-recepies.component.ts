import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-list-recepies',
  templateUrl: './list-recepies.component.html',
  styleUrls: ['./list-recepies.component.css']
})

export class ListRecepiesComponent {
listRecipes:Recipe[]=[
  new Recipe("Carbonara","Spaghetti con tuorlo d'uovo, pecorino, pepe","Application/src/assets/image/carbonara.png")
];

}
