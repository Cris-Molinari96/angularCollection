import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../models/recipe.model'
import {RecipesServiceService} from "../../../services/recipes-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements  OnInit{
    // comunicazione padre figlio tramite la notation @Input, tramite la recipe mostro i dettagli del item
    @Input() recipe!: Recipe;
    // Devo poter far ascoltare l'evento dall'esterno, quindi al padre, motivo per cui utilizzo @Output
    // @Output() featuredSelect = new EventEmitter<void>();

    constructor(private recipeService: RecipesServiceService, private router: Router, private aRoute: ActivatedRoute) {
    }

    ngOnInit() {
    }

    // * Questo è il modo per emettere un dato, utilizzando il metodo emit()
    // * successivamente stiamo utilizzando una variabile di tipo emit nel service
    // ? questo metodo ci renderizza al dettaglio di quella ricetta selezionata
    //! Ora questo viene gestito da un link nel template, il quale fa la stessa cosa
    // infoArticolo() {
    //   // this.recipeService.recipeEmit.emit(this.recipe);
    //   this.router.navigate([this.recipe.id], {relativeTo:this.aRoute})
    // }
}
