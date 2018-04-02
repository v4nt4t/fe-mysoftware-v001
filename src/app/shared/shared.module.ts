import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { AuthService } from './';


@NgModule({
  imports: [
    CommonModule,
    LoginModule
  ],
  declarations: [],
  providers:[
    AuthService
  ]
})
export class SharedModule { }
