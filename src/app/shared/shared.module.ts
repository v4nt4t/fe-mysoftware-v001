import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { AuthService, AuthPrincipalService } from './';


@NgModule({
  imports: [
    CommonModule,
    LoginModule
  ],
  declarations: [],
  providers:[
    AuthService,
    AuthPrincipalService
  ]
})
export class SharedModule { }
