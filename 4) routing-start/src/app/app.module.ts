import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {ServersComponent} from './servers/servers.component';
import {UserComponent} from './users/user/user.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {ServerComponent} from './servers/server/server.component';
import {ServersService} from './servers/servers.service';
import {RouterModule, Routes} from "@angular/router";
import {TestUserComponent} from './test-user/test-user.component';
import { NewUserComponent } from './test-user/new-user/new-user.component';

// configurazione rotte tramite l'array Routes
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id', component: UserComponent},
      {path: ':id/:name', component: UserComponent}
    ]
  },
  {
    path: 'servers', component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent},
    ]
  },
  {path: 'testUser/:name', component: TestUserComponent},

  // {path:'user/:id/:name', component:UserComponent},
  // {path:'user/:id', component:UserComponent},
  {path: 'tests', component: TestUserComponent, children:[
      {path:':id/:status',component: NewUserComponent}
    ]}
  // {path:'server/:id', component:ServerComponent},
  // imposto un percorso, con parametri dinamici, questo viene usato in home per accedere dinamicamente ad un singolo server
  // {path:'server/:id/edit', component: ServerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    TestUserComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Import RouterModule per avere accesso alle rotte e registrarle nell'applicazione
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
