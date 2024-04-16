import {Injectable} from '@angular/core';
// * Ciò che caratterizza un servizio e questa notazione @Injectable e ci dice che questo servizio può essere iniettato in altri componenti
// * infatti come già detto nel file intro-service.doc i servizi si basano sulla code injection e quindi è proprio quella notazione
// * che specifica che questa classe può essere iniettata in altri elementi
@Injectable({
  providedIn: 'root'
})
export class AuthappService {
  // infatti noi nel costruttore potremmo inserire altri elementi o altri servizi se questo dipendesse da qualcun'altro
  constructor() {
  }

  autenticazione = (userid: string, password: string): boolean => {
    // Stiamo introducendo la proprietà sessionStorage, per più info vedi il file 7Lezione e dando la responsabilità al servizio di verificare l'utente
    let retVal: boolean = (userid === 'cc' && password === '1234' ? true : false);

    if (retVal) {
      sessionStorage.setItem("Utente",userid);
    }

    return retVal;
  }

  // * dal sessionStorage potremmo ottenere dei valori null, in questo metodo stiamo andando a dire che
  // * se l'utente si è loggato, il nome utente sarà recuperato e ritornerà al metodo
  // * altrimenti il valore di ritorno del metodo sarà null
  loggedUser = ():string | null => (sessionStorage.getItem("Utente")) ? sessionStorage.getItem("Utente") : ""; // <- mostra il nome utente se loggato
  isLogged = ():boolean => (sessionStorage.getItem("Utente"))?true:false; // <- disabilita il pulsante logout se non è stato fatto l'accesso

  // entrambi i metodi rimuovono la chiave e il valore presente nella sessione, uno elimina solo l'item, l'altro elimina tutto
  clearUser=():void => sessionStorage.removeItem("Utente");
  clearAll=():void => sessionStorage.clear();

}
