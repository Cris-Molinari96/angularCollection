import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyTestComponent} from "./my-test.component";
import {MyTestRoutingModule} from "./my-test-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {RequestHttpService} from "../services/request-http.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyTestComponent,
    MyTestRoutingModule,
    HttpClientModule
  ],
  providers:[RequestHttpService]
})
export class MyTestModule { }
