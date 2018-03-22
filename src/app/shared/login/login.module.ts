import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { loginRoute } from './login.route';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild([loginRoute])
    ],
    declarations: [LoginComponent]
  })

export class LoginModule {}