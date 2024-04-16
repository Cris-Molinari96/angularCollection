import {Component} from '@angular/core';
import {AxiosService} from "../service/axios.service";

@Component({
  selector: 'app-conent',
  templateUrl: './conent.component.html',
  styleUrls: ['./conent.component.css']
})
export class ConentComponent {

  constructor(private axiosService: AxiosService) {
  }

  onLogin(input: any): void {
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    );
  }
}
