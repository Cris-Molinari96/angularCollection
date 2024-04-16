import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShopListComponent} from './shop-list/shop-list.component';
import {ShopListEditComponent} from './shop-list/shop-list-edit/shop-list-edit.component';
import {RecipesComponent} from './recipes/recipes.component';
import {DetailRecipesComponent} from './recipes/detail-recipes/detail-recipes.component';
import {ListRecipesComponent} from './recipes/list-recipes/list-recipes.component';
import {HomeComponent} from './home/home.component';
import {RecipeItemComponent} from './recipes/list-recipes/recipe-item/recipe-item.component';
import {ShoplistService} from "./services/shoplist.service";
import {RecipesServiceService} from "./services/recipes-service.service";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {StartRecipesComponent} from './recipes/start-recipes/start-recipes.component';
import {EditRecipeComponent} from './recipes/edit-recipe/edit-recipe.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewRecipeComponent} from './recipes/new-recipe/new-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopListComponent,
    ShopListEditComponent,
    RecipesComponent,
    DetailRecipesComponent,
    ListRecipesComponent,
    HomeComponent,
    RecipeItemComponent,
    PageNotFoundComponent,
    StartRecipesComponent,
    EditRecipeComponent,
    NewRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoplistService, RecipesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
