import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() featureLoad = new EventEmitter<string>();

  // questo metodo emette il valore del click sul link, shop-list-list-maga-home
  onSelect(feature: string) {
    this.featureLoad.emit(feature);
    console.log(feature);
  }

}
