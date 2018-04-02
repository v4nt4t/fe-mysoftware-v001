import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor( 
    private router:Router
  ) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean{
    let url: string = state.url;

    console.log('AuthGuard#canActivate called');
    return true;
  }

}