import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ NavbarComponent, LeftsidebarComponent, ErrorpageComponent, FooterComponent]
})
export class LayoutsModule { }
