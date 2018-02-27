import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';

@Injectable()
export class RouteguardGuard implements CanActivate {
public redirectUrl:string;

  constructor (private auth:AuthService,private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(localStorage.getItem('islogin')){return true}
      this.router.navigateByUrl('/administrator/login');
    return false;
    } 

  

}
