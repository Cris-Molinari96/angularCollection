import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
// dopo la creazione di un componente questo verrà importato in questo file
import {FirstComponentComponent} from './pages/first-component/first-component.component';
import {LoginComponent} from './pages/login/login.component';
import {RouterModule} from "@angular/router";
import { ErrorRouteComponent } from './pages/error-route/error-route.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ArticoliComponent } from './pages/articoli/articoli.component';
import {CoreModule} from "./core/core.module";
import { HomeComponent } from './pages/home/home.component';
import { LogoutComponent } from './pages/logout/logout.component';
import {authGuard} from "./guard/auth.guard";
import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';
import { ArticoliCardComponent } from './components/articoli-card/articoli-card.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({ // è composto da dichiarazioni dei componenti
  declarations: [ // qui verranno inseriti tutti i componenti creati
    AppComponent,
    FirstComponentComponent,
    LoginComponent,
    ErrorRouteComponent,
    WelcomeComponent,
    ArticoliComponent,
    HomeComponent,
    LogoutComponent,
    GridArticoliComponent,
    ArticoliCardComponent
  ],
  // e importazioni dei moduli che ci permettono di eseguire determinate funzionalità
  imports: [
    BrowserModule,
    FormsModule, // --> ecco l'importazione per applicare il binding bidirezionale dobbiamo importare questo modulo
    RouterModule.forRoot([ // il metodo forRoot ci permette di creare un array dove andiamo a specificare i percorsi
      {path:'',component:HomeComponent},
      {path:'login',component:LoginComponent},
      {path:'first',component:FirstComponentComponent},
      {path:'welcome/:userid',component:WelcomeComponent,canActivate:[authGuard]}, // aggiunta dei parametri di routing /:userID
      {path:'articoli',component:ArticoliComponent,canActivate:[authGuard]},
      {path:'articoli-grid',component:GridArticoliComponent,canActivate:[authGuard]},
      {path:'logout',component:LogoutComponent},
      // * Abbiamo generato un componente, il quale contiene un messaggio di errore quando la route non viene raggiunta o inesistente
      // * motivo per cui questo percorso deve essere sempre posto alla fine
      {path:'**',component:ErrorRouteComponent}
    ]),
    CoreModule,
    HttpClientModule // modulo http
  ],
  providers: [],
  bootstrap: [AppComponent] // --> indica il componente di base che dev'essere avviato quando l'applicazione viene eseguita
})
export class AppModule { }
