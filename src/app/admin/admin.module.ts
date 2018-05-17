import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserManagementModule } from './user-management/user-management.modul';

@NgModule({
  imports: [
    CommonModule,
    UserManagementModule
  ],
  declarations: []
})
export class AdminModule { }
