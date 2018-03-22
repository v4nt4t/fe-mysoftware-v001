import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HOME_ROUTE } from './home.route';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([HOME_ROUTE])
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
