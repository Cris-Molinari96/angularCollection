import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-test-number-view',
  templateUrl: './test-number-view.component.html',
  styleUrls: ['./test-number-view.component.css']
})
export class TestNumberViewComponent {
  // arrayNumber:number[] = [1,2,3,4,5];
  arrayNumberOdd: number[] = [2, 4];
  arrayNumberEven: number[] = [1, 3, 5];
  btnNumbers: boolean = false;
}
