import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../shared/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private loginService:LoginService
  ) { }

  ngOnInit() {
  }

  isAuthenticated(): boolean{
    return this.loginService.isAuthenticated();
  }

  logout() {
    this.loginService.logout();
  }
}
