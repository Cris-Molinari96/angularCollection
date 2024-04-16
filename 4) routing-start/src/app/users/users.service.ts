import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  constructor() {
  }

  // utilizzo del metodo find per cercare in un array un utente
  getUser(id: number) {
    const user = this.users.find(
      (use) => {
        if(use)
        return use.id === id;
      })
    return user;
  }

  getUsers(){
    return this.users;
  }

}
