import {Component, signal} from '@angular/core';
import {RequestHttpService} from "../services/request-http.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-my-test',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './my-test.component.html',
  styleUrl: './my-test.component.css'
})
export class MyTestComponent {

  constructor(private http: RequestHttpService) {
  }

  getData() {
    this.http.getData().subscribe((response)=>{
      console.log(response);
    })
  }
}
