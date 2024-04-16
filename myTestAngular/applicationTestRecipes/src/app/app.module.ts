import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListMagaComponent } from './magazzino/list-maga/list-maga.component';
import { ArticoloComponent } from './magazzino/list-maga/articolo/articolo.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DetailsItemComponent } from './magazzino/details-item/details-item.component';
import { MagazzinoComponent } from './magazzino/magazzino.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { TestNumberViewComponent } from './test-number-view/test-number-view.component';
import {BasicHighDirective} from "./customDirective/basicHigh/basicHigh.directive";
import { BetterHighDirective } from './customDirective/betterHigh/better-high.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListMagaComponent,
    ArticoloComponent,
    HeaderComponent,
    HomeComponent,
    DetailsItemComponent,
    MagazzinoComponent,
    ShopListComponent,
    TestNumberViewComponent,
    BasicHighDirective,
    BetterHighDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
