import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { 
  MainComponent, 
  NavbarComponent, 
  LeftsidebarComponent, 
  FooterComponent, 
  ErrorpageComponent } from './layouts';
import { HomeModule } from './home';

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
    HomeModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
