import {Component, Input} from "@angular/core";
import {AccountModels} from "../models/account.models";
import {HandlerServiceService} from "../handler-service.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent{

  @Input()account!:AccountModels;
  @Input() id!:number;

  constructor(private handlerService:HandlerServiceService) {
  }

  //! emissione di un evento, c'è qualcuno che ascolta quest'evento quando viene emesso
  onSetTo(status: string) {
    // this.handlerService.onSetStatus(this.id,status);
    this.handlerService.statusChanged.emit(status);
  }
}
