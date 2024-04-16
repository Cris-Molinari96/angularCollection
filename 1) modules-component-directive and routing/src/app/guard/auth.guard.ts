import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {

  const userId:string|null = sessionStorage.getItem('Utente');
  const router: Router = inject(Router);

  if (userId) {
    return true;
  } else {
    alert('Sorry, can\'t access, before logged');
    router.navigate(['login']);
    return false;
  }

};
