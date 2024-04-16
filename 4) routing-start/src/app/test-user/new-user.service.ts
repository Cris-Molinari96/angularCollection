import { Injectable } from '@angular/core';
import {UserModel} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  listUser:UserModel[]=[
     new UserModel(1,'Cristian','active'),
     new UserModel(2,'Marco','active'),
     new UserModel(3,'Giacomo','offline'),
     new UserModel(4,'Riccardo','banned')
  ];

  constructor() { }

  getUsers():UserModel[]{
    return this.listUser;
  }

  getUser(id:number):UserModel{
    const user:UserModel = this.listUser.find(
      (us) => {
        return us.id === id;
      }
    )
      return user;
  }

}
