import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';

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
    AlertModule.forRoot(),
    AppRoutingModule,
    HomeModule,
    SharedModule,
    Ng2Webstorage,
    AccountModule
  ],
  providers: [AuthGuard],
  bootstrap: [MainComponent]
})
export class AppModule { }
