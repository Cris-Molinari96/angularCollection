import {Component, OnInit} from '@angular/core';
import {AccountModels} from "../models/account.models";
import {HandlerServiceService} from "../handler-service.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit{

    listAccount!:AccountModels[];

    constructor(private handlerService:HandlerServiceService) {

    }

    //! Questo componente resta in ascolto, quando viene emesso l'evento in account.component.ts,
    //! con il metodo subscribe, è possibile
    //! abbonarsi ad un evento, e restare in ascolto per quel tipo di evento,
    //! il nostro evento si chiama statusChanged
    ngOnInit(): void {
        this.listAccount = this.handlerService.listAccounts;

        this.handlerService.statusChanged.subscribe(
            (status:string) => console.log('Ti sei iscritto ad un evento di change status account' + "response: " + status),
            () => console.log('Si è verificato un errore'),
            () => console.log('Operazione completa')
        )
    }

    onCreateAccount(name:string,status:string){
      this.handlerService.onAddAccount(new AccountModels(name,status));
    }
}
