import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mheadermenuModule } from './mheadermenu/mheadermenu.module';

@NgModule({
  imports: [
    CommonModule,
    mheadermenuModule
  ],
  declarations: [
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MasterModule { }
