import {Component, OnInit} from '@angular/core';
import {RecipesServiceService} from "../../services/recipes-service.service";
import {Recipe} from "../../models/recipe.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Ingredient} from "../../models/ingredient.model";

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  recipe!: Recipe | undefined;
  initFormTemplate!: FormGroup;
  arrayIngredient = new FormArray<FormGroup>([]);
  idReceipts: number | undefined;

  constructor(private recipeService: RecipesServiceService,
              private aRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.aRoute.params.subscribe((param: Params) => {
      this.idReceipts = parseInt(param['id']);
      this.recipe = this.recipeService.getRecipe(this.idReceipts);
    })

    this.refreshIngredient();


    // const param: Params = this.aRoute.snapshot.params;
    // this.idReceipts = +param['id'];

    this.initForm();

  }

  private refreshIngredient(){
    this.recipeService.ingredientChange.subscribe(
      res => {
        const formArray = new FormArray<FormGroup>([]);
        res.forEach(ingredient => {
          const formGroup = new FormGroup({
            name: new FormControl(ingredient.name),
            amount: new FormControl(ingredient.amount)
          });
          formArray.push(formGroup);
        });
        this.arrayIngredient = formArray;
      });
  }

  // diamo la responsabilità a un evento di inizializzare il nostro form
  private initForm() {
    const itemRecipe: Recipe | undefined = this.recipe;

    // ! Aggiungere nel form array gli ingredienti, e settaggio del nostro formArray

    if (itemRecipe?.ingredients.length != 0) {
      for (let ingredient of itemRecipe?.ingredients!) {
        this.arrayIngredient.push(
          new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          }))
      }
    }
//! QUI STIAMO CREANDO IL NOSTRO FORM!
    this.initFormTemplate = new FormGroup<any>({
      // 'mainGroup': new FormGroup({
      'name': new FormControl(itemRecipe?.name, Validators.required),
      'imagePath': new FormControl(itemRecipe?.imageUrl, Validators.required),
      'description': new FormControl(itemRecipe?.description, Validators.required),
      // }),
      'ingredients': this.arrayIngredient
    })
  }

  get ingredientFormArray(): FormArray {
    return this.arrayIngredient;
  }

  public onSubmit() {
    const ingredientList = this.initFormTemplate.value.ingredients;
    let tempId = (this.idReceipts! - 1);

    const recipeNew: Recipe = new Recipe(
      tempId,
      this.initFormTemplate.value['name'],
      this.initFormTemplate.value['description'],
      this.initFormTemplate.value['imagePath'],
      this.initFormTemplate.value['ingredients']
    )
    for (const ingredientListElement of ingredientList) {
      this.recipe?.onAddIngredientModel(ingredientListElement);
    }
    this.recipeService.editReceipt(tempId, recipeNew);
    this.router.navigate(['recipes']);
  }

  public onDelete() {
    this.router.navigate(['../../'], {relativeTo: this.aRoute})
  }

  onAddIngredient() {
    (<FormArray>this.ingredientFormArray).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    )
  }

  onDeleteIngredient(i: number) {
    this.recipeService.onDeleteIngredient(this.recipe?.id!, i);
  }
}
