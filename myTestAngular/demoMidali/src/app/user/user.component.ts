import {Component} from "@angular/core";

@Component({
  selector:'app-user',
  templateUrl:'./user.component.html',
  styleUrls:['./user.component.css']
})
export class UserComponent{

  username:string = "";
  wMessage:string = "";
  counter:number= 0;

  welcomeUser(){
      if(this.username === ""){
        this.wMessage = "Bad message, not valid username";
      }else{
        this.wMessage = "you're welcome, " + this.username + " my bro!";
        ++this.counter;
      }
  }

  resetData() {
    this.username = "";
    this.wMessage = "";
  }

}
