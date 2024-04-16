import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {path:'', component:AppComponent},
  {path:'my-test', loadChildren:() => import('./my-test/my-test.module').then(m => m.MyTestModule)}
];
