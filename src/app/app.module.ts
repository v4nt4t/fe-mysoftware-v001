import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import {Ng2Webstorage} from 'ngx-webstorage';

import { 
  MainComponent, 
  NavbarComponent, 
  LeftsidebarComponent, 
  FooterComponent, 
  ErrorpageComponent } from './layouts';
import { HomeModule } from './home';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './shared';
import { AccountModule } from './account/account.module';
import { EntitiesModule } from './entities/entities.module';
import { httpInterceptorProviders } from './block/http-interceptors';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent,
    LeftsidebarComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    HomeModule,
    SharedModule,
    Ng2Webstorage,
    AccountModule,
    EntitiesModule
  ],
  providers: [
    httpInterceptorProviders,
    AuthGuard
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
