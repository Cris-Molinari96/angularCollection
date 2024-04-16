import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { RecepiesComponent } from './recepies/recepies.component';
import { ListRecepiesComponent } from './recepies/list-recepies/list-recepies.component';
import { DetailRecepiesComponent } from './recepies/detail-recepies/detail-recepies.component';
import { ItemRecepiesComponent } from './recepies/list-recepies/item-recepies/item-recepies.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopListEditComponent } from './shop-list/shop-list-edit/shop-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    ListRecepiesComponent,
    DetailRecepiesComponent,
    ItemRecepiesComponent,
    ShopListComponent,
    ShopListEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
