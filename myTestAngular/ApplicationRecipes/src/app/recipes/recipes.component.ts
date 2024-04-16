import {Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../models/recipe.model';
import {RecipesServiceService} from "../services/recipes-service.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{

  recipeSelected!:Recipe;

  constructor(private serviceRecipe:RecipesServiceService) {
  }

  ngOnInit() {
    this.serviceRecipe.recipeEmit.subscribe(
      (recipe:Recipe) => {
        this.recipeSelected = recipe;
      }
    )
  }

}
