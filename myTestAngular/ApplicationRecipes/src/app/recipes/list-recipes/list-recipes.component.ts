import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe.model";
import {RecipesServiceService} from "../../services/recipes-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-list-recipes',
    templateUrl: './list-recipes.component.html',
    styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {

    listRecipes!: Recipe[];

    constructor(private recipesService: RecipesServiceService, private aRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.recipesService.receiptsChange.subscribe((recipe: Recipe[]) => {
            this.listRecipes = recipe;
        })

        this.listRecipes = this.recipesService.getRecipes();
    }

    /*recipeSelected(recipeEl: Recipe) {
      console.log(recipeEl.name + " " + recipeEl.description)
      this.recipeSel.emit(recipeEl);
    }*/
    addRecipes() {
        this.router.navigate(['new'], {relativeTo: this.aRoute})
    }
}
