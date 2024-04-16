import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ListRecipesComponent} from "./recipes/list-recipes/list-recipes.component";
import {DetailRecipesComponent} from "./recipes/detail-recipes/detail-recipes.component";
import {RecipeItemComponent} from "./recipes/list-recipes/recipe-item/recipe-item.component";
import {ShopListComponent} from "./shop-list/shop-list.component";
import {ShopListEditComponent} from "./shop-list/shop-list-edit/shop-list-edit.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {StartRecipesComponent} from "./recipes/start-recipes/start-recipes.component";
import {EditRecipeComponent} from "./recipes/edit-recipe/edit-recipe.component";
import {NewRecipeComponent} from "./recipes/new-recipe/new-recipe.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path:'new', component:NewRecipeComponent},
      {path: '', component: StartRecipesComponent},
      {path: ':id', component: DetailRecipesComponent},
      {path: ':id/edit', component: EditRecipeComponent},
    ]
  },
  /*{path:'detail-recipes', component:DetailRecipesComponent}*/
  /* ]}*/
  {
    path: 'shop-list', component: ShopListComponent/*, children:[
      {path: '/edit', component: ShopListEditComponent}
    ]*/
  },
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
