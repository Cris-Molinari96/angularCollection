import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipesServiceService} from "../../services/recipes-service.service";

@Component({
  selector: 'app-detail-recipes',
  templateUrl: './detail-recipes.component.html',
  styleUrls: ['./detail-recipes.component.css']
})
export class DetailRecipesComponent implements OnInit {

  recipe!: Recipe | undefined;
  imagePathUl:any;
  // @Input() recipeSelected!:Recipe;

  constructor(private aRoute: ActivatedRoute, private recipeService: RecipesServiceService,private route:Router) {
  }

  // Quindi viene mostrato subito l'item, perchè edit-item attiva la rotta con il parametro dinamico :id
  // Ci serviamo del service e delle proprietà che ci consentono di recuperare il parametro dalla rotta, il quale
  // avvalora recipe, inoltre Param è un objectable per cui è possibile iscriversi dato che emette valori ogni volta che
  // viene selezionato un item diverso
  ngOnInit() {
    const param: Params = this.aRoute.snapshot.params;
    const id: number = +param['id']
    this.recipe = this.recipeService.getRecipe(id);

    this.aRoute.params.subscribe(
      (param) => {
        this.recipe = this.recipeService.getRecipe(parseInt(param['id']))
      }
    )

  }

  // Questo metodo attiva la rotta e ci mostra il componente edit
  onUpdate() {
    this.route.navigate(['edit'], {relativeTo:this.aRoute})
  }

  onDelete() {
    this.recipeService.onDeleteById(this.recipe?.id!);
    this.route.navigate(['../'], {relativeTo:this.aRoute});
  }
}
