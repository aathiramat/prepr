import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

class AuthGuard {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return localStorage.getItem('user') || localStorage.getItem('socialUser') ;
  }
}


export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, state: RouterStateSnapshot
):boolean => {
  const router = inject(Router);
  if(!inject(AuthGuard).canActivate(route, state)) {
    router.navigate(['']);
    return false;
  } else return true;
};
