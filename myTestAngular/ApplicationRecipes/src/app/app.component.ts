import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'ApplicationRecipes';
  featuredSelect:string = '';
  

  onNavigate(feature:string) {
this.featuredSelect = feature;
    console.log("feature " + feature)
    console.log("feature selected " + this.featuredSelect)
  }
}
