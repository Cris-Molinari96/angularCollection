import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') testForm:NgForm;
  username:string='Mario-Rossi'
  emailUser:string='...@gmail.com'
  secretAnswer:string = 'Your first......'
  answer:any;
  genders:string[] = ['male','female'];
  // ngModelGroup

  suggestUserName() {
    const suggestedName:string[] = ['Superuser','RottoInCulo','Blatta'];
    let num:number =  Math.floor(Math.random() * 5);
    console.log(num);
    // this.testForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:'email@email.com',
    //   },
    //   secret:'pet',
    //   qA:'',
    //   gender:'male'
    // })

    // Oppure settare un singolo campo

    this.testForm.form.patchValue({
      userData:{
        username:suggestedName[num]
      }
    })

  }

  onSubmit() {
    console.log(this.testForm);
  }
}
