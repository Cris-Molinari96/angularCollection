import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ServerComponent} from "./server/server.component";
import {UserComponent} from "./user/user.component";

@NgModule({
  // Qui andranno inseriti tutti i componenti nuovi
  declarations: [
    AppComponent,
    ServerComponent,
    UserComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
