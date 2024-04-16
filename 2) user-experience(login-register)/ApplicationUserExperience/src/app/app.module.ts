import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ConentComponent } from './conent/conent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponentComponent,
    WelcomeContentComponent,
    LoginFormComponent,
    ConentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
