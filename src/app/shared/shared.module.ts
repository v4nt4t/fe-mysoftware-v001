import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { AuthService, AuthPrincipalService, AuthServerProvider } from './';


@NgModule({
  imports: [
    CommonModule,
    LoginModule
  ],
  declarations: [],
  providers:[
    AuthService,
    AuthPrincipalService,
    AuthServerProvider
  ]
})
export class SharedModule { }
