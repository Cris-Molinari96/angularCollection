import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // è possibili richiamare un componente in base al suo selettore.
  templateUrl: './app.component.html', // utilizziamo il template del componente
  styleUrls: ['./app.component.css'] // style componente
})
export class AppComponent {
  welcome:string = "Welcome!!!";
  title: string="";
}

