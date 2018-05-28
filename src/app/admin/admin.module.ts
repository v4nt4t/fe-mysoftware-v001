import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserManagementModule } from './user-management/user-management.modul';
import { UserManagementMenuModule } from './user-management-menu';

@NgModule({
  imports: [
    CommonModule,
    UserManagementModule,
    UserManagementMenuModule
  ],
  declarations: []
})
export class AdminModule { }
