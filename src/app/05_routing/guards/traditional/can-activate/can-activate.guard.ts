import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// export const canActivateGuard: CanActivateFn = (route, state) => {
//   return true;
// };


@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    

    return true;
  } 

}