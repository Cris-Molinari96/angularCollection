import {Injectable} from '@angular/core';
import {UserModel} from "./models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserServiceService {

    constructor() {
    }

    activeUsers: UserModel[] = [
        new UserModel('Max', 1),
        new UserModel('Anna', 2)
    ];

    inactiveUsers: UserModel[] = [
        new UserModel('Franck', 3),
        new UserModel('Antonio', 4)
    ];

    onSetToInactive(user: UserModel) {
        this.inactiveUsers.push(user);
        this.activeUsers.splice(user.id, 1);

    }

    onSetToActive(user: UserModel) {
       this.activeUsers.push(user);this.inactiveUsers.splice(user.id, 1);
    }

}
