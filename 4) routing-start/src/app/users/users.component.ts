import {Component, OnInit} from '@angular/core';
import {parse} from "@angular/compiler-cli/linker/babel/src/babel_core";
import {UsersService} from "./users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService]
})
export class UsersComponent implements OnInit{
  users:{id:number, name:string}[]=[];
  protected readonly parseInt = parseInt;

  constructor(private userService:UsersService,private route:Router) {
  }
  ngOnInit() {
    this.users = this.userService.getUsers();
  }


  onSearchUser(id: number) {
    this.route.navigate(['./users', id]);
  }

}
