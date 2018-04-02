import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { loginRoute } from './login.route';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

@NgModule({
    imports: [
      FormsModule,
      CommonModule,
      RouterModule.forChild([loginRoute])      
    ],
    declarations: [LoginComponent],
    providers:[
        LoginService
    ]
  })

export class LoginModule {}