import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mheadermenuModule } from './mheadermenu/mheadermenu.module';
import { MgroupmenuModule } from './mgroupmenu/mgroupmenu.module';
import { MmenuModule } from './mmenu/mmenu.module';

@NgModule({
  imports: [
    CommonModule,
    mheadermenuModule,
    MgroupmenuModule,
    MmenuModule
  ],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MasterModule { }
