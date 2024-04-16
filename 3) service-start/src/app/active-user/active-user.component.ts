import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {UserModel} from "../models/user.model";

@Component({
    selector: 'app-active-user',
    templateUrl: './active-user.component.html',
    styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit{
    users!: UserModel[];

    constructor(private userService: UserServiceService) {
    }

    ngOnInit() {
        this.users = this.userService.activeUsers;
    }

    onSetToInactiveEvent(user:UserModel) {
        console.log(user.name + " " + user.id)
        this.userService.onSetToInactive(user);
    }
}
