import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../shared/login/login.service';
import { AuthPrincipalService } from '../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private loginService:LoginService,
    private authPrincipalService: AuthPrincipalService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  isAuthenticated(): boolean{
    return this.authPrincipalService.isAuthenticated();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['']);
  }
}
