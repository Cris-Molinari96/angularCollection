import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NewUserService} from "./new-user.service";

@Component({
  selector: 'app-test-user',
  templateUrl: './test-user.component.html',
  styleUrls: ['./test-user.component.css'],
  providers:[NewUserService]
})
export class TestUserComponent implements OnInit {

  listUser = [];

  constructor(private userService:NewUserService,private router:Router) { }

  ngOnInit(): void {
    this.listUser = this.userService.getUsers();
  }

  onLoadHome(){
    this.router.navigate([''])
  }

  onLoadServer() {
    this.router.navigate(['users'])
  }



}
