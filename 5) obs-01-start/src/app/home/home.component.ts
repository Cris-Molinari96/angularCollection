import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subscription} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  subscription: Subscription;

  constructor() { }


  // creazione di un observable, tramite gli intervalli (gli intervalli sono observable) --> ossia oggetti ai quali è possibile iscriversi
  // perchè questi emanano dei valori nel tempo
  // il metodo funziona un pò come il setTimeout, infatti abbiamo impostato un tempo di 1000 sec, in questi secondi viene registrato il count
  // ogni 1000 secondi verrà eseguito l'evento
/* ngOnInit() {
    this.subscription = interval(1000).subscribe(count => {
      console.log(count);
    })
  }*/
  ngOnInit() {

    // questo metodo della creazione del observable potrebbe stare anche in un service

    // ! USE SET-TIMEOUTE per generare valori ogni 1s
    /*const customObservable = new Observable((observe: Observer<any>) => {
      let count = 0;
      // custom funzione che emana valori
      //L'osservatore è in ascolto per questa funzione, perché questa sta emanando nuovi valori
      function tick() {
        observe.next(count); // qui viene emanato il valore di count,
        count++;
        setTimeout(tick, 1000); // questo metodo viene richiamato e eseguito ogni secondo,
        // per emanare un nuovo valore di counter
      }
      tick();
    })*/

    // ! USE SET-ITERVAL per generare valori a intervalli regolari, trasmettendoli al observe
    /*const customObservable = new Observable((observe:Observer<any>) =>{
      let counter = 0;
      setInterval(() => {
        observe.next(counter);
        counter++;
      },1000);
    })
    customObservable.subscribe(data => {
      console.log(data);
    })*/


    const customObserve = new Observable((observe:Observer<any>) => {
      let counter = 0;
    // ogni 1s viene eseguito l'intervallo e incrementato il valore di counter, emanando il valori tramite il metodo next dell'osservatore
      setInterval(() => {
        observe.next(counter)
        counter ++;
      },1000)
    })

    // un oggetto di tipo subscription viene gestito da angular, nel senso che quando viene fatta la richiesta per visualizzare un
    // componente diverso dalla home, allora l'iscrizione a quest'evento si annullerà
    this.subscription = customObserve.subscribe((data) => {
      console.log(data);
      /*if(data > 10){
        this.subscription.unsubscribe();
      }*/
    })

  }

  // quello che dobbiamo fare per evitare perdite di memoria, perchè in questo modo quel count continua ad incrementare anche quando
  // si lascia la pagina di home,
  // è utilizzare il componente Subscription del pacchetto rxjs, il metodo destroy implementado l'interfaccia OnDestroy,
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
