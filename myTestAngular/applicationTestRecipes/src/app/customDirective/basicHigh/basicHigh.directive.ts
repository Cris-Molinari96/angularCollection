import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from "@angular/core";

/*Creazione direttiva */

@Directive({
  selector:'[appBasicHigh]'
})
export class BasicHighDirective implements OnInit{

  @Input() setBackColor!:string;
  @Input() setFontColor!: string;

  @HostBinding('style.backgroundColor') backgroundColor!:string;
  @HostBinding('style.color') color!: string;

  // in questo modo viene iniettato l'elemento a cui stiamo facendo riferimento,
  // L'elemento a cui facciamo riferimento è un semplice tag html
  constructor(private elementRef: ElementRef) {
  }

  // Abbiamo accesso alle proprietà dell'elemento in questo modo -->
  ngOnInit(): void {
    // in questo modo ottengo l'accesso all'elemento sul quale sto utilizzando questa direttiva,
    // e posso agire sullo style, <-- esempio

    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.elementRef.nativeElement.style.color = 'white';


    // this.elementRef.nativeElement.style.backgroundColor = this.backCol;

    this.backgroundColor = this.setBackColor;
    this.color = this.setFontColor;
  }

  @HostListener('mouseover') mouseover() {
    this.backgroundColor = 'transparent';
    this.color = 'purple';
  }

  @HostListener('mouseleave') mouseleave(/*event:Event*/) {
    this.backgroundColor = this.setBackColor;
    this.color = this.setFontColor;
  }

}
