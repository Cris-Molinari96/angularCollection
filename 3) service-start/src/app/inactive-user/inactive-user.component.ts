import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {UserModel} from "../models/user.model";

@Component({
    selector: 'app-inactive-user',
    templateUrl: './inactive-user.component.html',
    styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit{
    @Input() users!: UserModel[];

    constructor(private userService: UserServiceService) {
    }

    ngOnInit() {
        this.users = this.userService.inactiveUsers;
    }

    onSetToActive(user:UserModel) {
        this.userService.onSetToActive(user);
    }
}
