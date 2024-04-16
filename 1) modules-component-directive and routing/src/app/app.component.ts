import { Component } from '@angular/core';

// identifica i 3 elementi fondamentali per la nostra applicazione front-end
@Component({
  selector: 'app-root', // il modulo radice/modulo root viene identificato con questo selettore (app-root)
  templateUrl: './app.component.html', // è dove il componente app-root andrà a trovare il codice html
  styleUrls: ['./app.component.css'] // normale foglio di stile
})
export class AppComponent {
}
