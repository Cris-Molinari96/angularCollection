import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

/*Custom directive*/
@Directive({
  selector: '[appBetterHigh]'
})
export class BetterHighDirective implements OnInit {


  /**
   * 2 caso, possiamo utilizzare un @HostBinding,
   * questo decoratore ci consente di accedere alla proprietà dell'elemento dom ('proprieta.nomeProprietà') --> ricorda che gli elementi dom non conoscono i - ma solo camelCase
   * nomeProprietà = 'valore'
   */
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  // @HostBinding('style.color') color: string = 'yellow';

  /** 3 caso con hostBinding(proprietà.nome = valore), recupero valore dall'esterno*/
  @Input() setBackColor!:string;
  @Input() setFontColor!: string;

  @HostBinding('style.backgroundColor') backgroundColor!:string;
  @HostBinding('style.color') color!: string;

  /** 1 Caso, render2, elementoRef*/
  constructor(private elRef: ElementRef, private render: Renderer2) {
  }

  ngOnInit(): void {
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'purple');
    // this.render.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = this.setBackColor;
    this.color = this.setFontColor;
  }

  @HostListener('mouseover') mouseover() {
    // this.render.setStyle(this.elRef.nativeElement, 'background-color',"purple")
    // this.render.setStyle(this.elRef.nativeElement, 'color',"white")

    /** Applicazione 2 caso */
    // this.backgroundColor = 'purple';

    /** Applicazione 3 caso */
    this.backgroundColor = 'black';
    this.color = 'purple';
  }

  @HostListener('mouseleave') mouseleave(/*event:Event*/) {
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', "blue");
    // this.render.setStyle(this.elRef.nativeElement, 'color', "black")

    /** Applicazione 2 caso */
    // this.backgroundColor = 'transparent'
    // this.color = 'blue'

    /** Applicazione 3 caso */
    this.backgroundColor = this.setBackColor;
    this.color = this.setFontColor;
  }
}
