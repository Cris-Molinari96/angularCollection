import {EventEmitter, Injectable} from '@angular/core';
import {AccountModels} from "./models/account.models";

@Injectable({
  providedIn: 'root'
})
export class HandlerServiceService {

  listAccounts: AccountModels[] = [
    new AccountModels('Cristian', 'active'),
    new AccountModels('Roberto', 'active'),
    new AccountModels('Franco', 'active'),
  ];

  constructor() {
  }


  //! creazione dell'evento speciale, in un service
  statusChanged = new EventEmitter<string>();

  onAddAccount(account: AccountModels) {
    if (this.listAccounts.push(account)) {
      alert('Account add correct')
    }else{
      alert('ERROR')
    }
  }

  onSetStatus(id:number, status:string){
    this.listAccounts[id].status = status;
  }

}
