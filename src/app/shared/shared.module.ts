import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginModule } from './login/login.module';
import { 
  AuthService, 
  AuthPrincipalService, 
  AuthServerProvider, 
  ParseLinks,
  ModalPesanComponent,
  PesanService,
  HandleErrorService,
  AccountServices
} from './';
import { SharedCommonModule } from './shared-common-module';
import { SharedLibModule } from './shared-lib.module';


@NgModule({
  imports: [
    SharedLibModule,
    LoginModule,
    SharedCommonModule
  ],
  declarations: [
    ModalPesanComponent
  ],
  providers:[
    AuthService,
    AuthPrincipalService,
    AuthServerProvider,
    ParseLinks,
    PesanService,
    HandleErrorService,
    AccountServices
  ],
  entryComponents:[
    ModalPesanComponent
  ],
  exports:[
    SharedCommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule { }