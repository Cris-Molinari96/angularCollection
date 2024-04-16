import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // emettiamo un dato, dal figlio (header) al padre (app)
  // per emettere un dato all'esterno utilizziamo, EventEmitter,
  // in collaborazione di un metodo che viene attivato al verificarsi di un evento
  // @Output() featureSelected = new EventEmitter<string>();
  //
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature)
  // }

}
