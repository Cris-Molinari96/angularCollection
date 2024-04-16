import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipesServiceService} from "../../services/recipes-service.service";
import {Recipe} from "../../models/recipe.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit{

  initForm!:FormGroup;
  formArray =  new FormArray<FormGroup>([
      new FormGroup({
        'name': new FormControl(null),
      'amount':new FormControl(null)})
  ]);
  constructor(private recipesService:RecipesServiceService,
              private router:Router) {
  }

  ngOnInit(){
    this.initForm = new FormGroup({
      'image': new FormControl(null),
      'name': new FormControl(null),
      'description': new FormControl(null),
      'ingredients':this.formArray
    })
  }

  onSubmit() {

    const listR = this.recipesService.getRecipes();
    const r = listR[listR.length - 1];
    const numRId = (r.id + 1)

    const myList = [{
      name:this.initForm.value['ingredients'].name,
      amount: this.initForm.value['ingredients'].amount
    }]

    const receipt = new Recipe(
      numRId,
      this.initForm.value['name'],
      this.initForm.value['description'],
      this.initForm.value['imagePath'],
      myList
    )

    this.recipesService.addReceipt(receipt);
    this.recipesService.ingredientChange.next(receipt.ingredients);
    this.router.navigate(['recipes']);
  }

  //! aggiungi input al form
  onAddIngredient() {
    (<FormArray>this.formArray).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    )
  }
}
