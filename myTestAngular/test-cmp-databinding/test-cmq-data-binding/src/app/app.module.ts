import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { HandlerServerComponent } from './handler-server/handler-server.component';
import {FormsModule} from "@angular/forms";
import { ServerTestComponent } from './server-test/server-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HandlerServerComponent,
    ServerTestComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
