import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserModel} from "../../model/user.model";
import {NewUserService} from "../new-user.service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user:UserModel;

  constructor(private route:Router,private userService:NewUserService ,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activated.snapshot.params['id'];
    const user:UserModel = this.userService.getUser(id);

    this.activated.params.subscribe(
      (params) => {
        this.user.id = params['id'];
        this.user.status=params['status']
      }
    )
  }

  onSetUser(){
    this.route.navigate(['edit'])
  }


}
