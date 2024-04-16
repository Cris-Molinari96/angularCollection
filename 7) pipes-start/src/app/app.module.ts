import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {CustomPipePipe} from "./customPipe.pipe";
import { FilterPipe } from './filter.pipe';
import {RequestService} from "./services/request.service";

@NgModule({
  declarations: [
    AppComponent,
    CustomPipePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
