import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../models/ingredient.model";
import {ShoplistService} from "../../services/shoplist.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shop-list-edit',
  templateUrl: './shop-list-edit.component.html',
  styleUrls: ['./shop-list-edit.component.css']
})
export class ShopListEditComponent implements OnInit, OnDestroy {
  // recuperiamo i valori da tag html (input)
  // @ViewChild('nameIngredient') inputNameIngredient!: ElementRef;
  // @ViewChild('amountIngredient') inputAmountIngredient!: ElementRef;

  @ViewChild('form') form: NgForm | undefined;
  item: Ingredient | undefined;
  subscription: Subscription | undefined;
  editMode: boolean = false;
  editIndexMode: number | undefined;


  // questa varaibile d'output viene avvalorata quando si verifica un evento, motivo per cui per
  // accedere alla proprietà dall'esterno abbiamo bisogno delle ()
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shopListService: ShoplistService) {
  }

  public ngOnInit() {
    // Qui ci stiamo iscrivendo all'evento che mette l'index dell'item. In un metodo del service andiamo a recuperare l'item, questo grazie all'index
    this.subscription = this.shopListService.startedEditing.subscribe(
      (eve: number) => {
        // * variabili editIndex per catturare l'index, editMode come già detto, item per recuperare l'item
        this.editIndexMode = eve;
        this.editMode = true;
        this.item = this.shopListService.getIngredient(eve);
        console.log(this.item);
        this.form?.setValue({
          name: this.item.name,
          amount: this.item.amount,
        })
      })

    this.resetItem();
  }

  public ngOnDestroy() {
    console.log('distrutto!')
    this.subscription?.unsubscribe();
  }

  // onAddIngredient() {
  // recuperiamo il loro valore e ci costruiamo un oggetto Ingredient, in quale viene emesso all'esterno
  // e recuperato nel selettore list-edit, dato che si parla di un evento ci leghiamo con le ()
  // const ingredient: Ingredient = new Ingredient(
  //   this.inputNameIngredient.nativeElement.value,
  //   this.inputAmountIngredient.nativeElement.value);
  // this.ingredientAdded.emit(ingredient);
  // this.shopListService.onAddItem(new Ingredient(this.inputNameIngredient.nativeElement.value,this.inputAmountIngredient.nativeElement.value))
  // }

  public onSubmit(form: NgForm) {
    if (this.editMode) {
      this.editItemMode(form);
    } else {
      this.shopListService.onAddItem(new Ingredient(form.value.name, form.value.amount))
    }
    form.reset();
  }

  private editItemMode(form: NgForm) {
    const value = form?.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shopListService.editItem(this.editIndexMode, newIngredient)
    this.editMode = false;
    // form.reset({
    //   name: '',
    //   amount: ''
    // })
  }

  private resetItem() {
    this.shopListService.clearButton.subscribe((bool) => {
      bool ? (this.form?.reset(), this.editMode = true) : null;
    })
  }

  public clearForm(){
    this.form?.reset();
  }
}
