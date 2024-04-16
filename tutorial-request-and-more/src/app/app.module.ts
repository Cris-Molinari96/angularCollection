import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routes} from "./app.routes";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [routes],
  imports: [
    CommonModule,
    routes
  ]
})
export class AppModule {
}
