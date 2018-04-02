import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // status untuk pesan gagal login
  authenticationError:boolean;
  
  username: string;
  password:string;
  rememberMe:boolean = false;

  constructor(
    private loginService:LoginService,
    private router:Router
  ) {}

  ngOnInit() {
    
  }

  login(){
    this.loginService.login({
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe
    }).then(() => {
      this.authenticationError = false;
      this.router.navigate(['']);
    }).catch(() => {
      this.authenticationError = true;
      this.router.navigate(['/login']);
    });
  }

}
