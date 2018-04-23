import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mheadermenuModule } from './mheadermenu/mheadermenu.module';
import { SharedMasterModule } from './shared/shared-master.module';

@NgModule({
  imports: [
    CommonModule,
    SharedMasterModule,
    mheadermenuModule
  ],
  declarations: [
  ]
})
export class MasterModule { }
