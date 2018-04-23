import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { 
  AuthService, 
  AuthPrincipalService, 
  AuthServerProvider, 
  ParseLinks,
  ModalPesanComponent,
  PesanService
} from './';

@NgModule({
  imports: [
    CommonModule,
    LoginModule
  ],
  declarations: [
    ModalPesanComponent
  ],
  providers:[
    AuthService,
    AuthPrincipalService,
    AuthServerProvider,
    ParseLinks,
    PesanService
  ],
  entryComponents:[
    ModalPesanComponent
  ]

})
export class SharedModule { }
