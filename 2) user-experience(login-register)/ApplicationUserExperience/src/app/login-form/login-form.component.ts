import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
// questo evento di output crea un evento utilizzato per emettere i dati di login  quando verrà cliccato il tasto login
  @Output() onSubmitLoginEvent = new EventEmitter();

  login: string = "";
  password: string = "";

  // questo metodo ci permette di emettere i dati del form
  onSubmitLogin():void{
    this.onSubmitLoginEvent.emit({"login":this.login,"password":this.password})
  }
}
