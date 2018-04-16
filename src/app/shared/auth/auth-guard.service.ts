import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthPrincipalService } from './auth-principal.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor( 
    private router:Router,
    private authPrincipalService:AuthPrincipalService
  ) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean| Promise<boolean>{
    let url: string = state.url;
    
    const authorities = route.data['authorities'];
    return this.checkLogin();
  }

  checkLogin(): boolean {
    const principal = this.authPrincipalService;

      //cek sudah login atau blm
      return principal.identity(false);
  }
}