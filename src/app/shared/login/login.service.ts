import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AuthPrincipalService } from '../auth/auth-principal.service';

@Injectable()
export class LoginService{

    constructor(
        private authService: AuthService,
        private authPrincipalService: AuthPrincipalService
    ){}

    login(credentials, callback?) {
        const cb = callback || function() {};

        return new Promise((resolve, reject) => {

            //cek login
            this.authService.login(credentials).subscribe(() => {
                this.authPrincipalService.identity(true);

                resolve();
                return cb('success');
            },(err) =>{
                reject(err);
                this.logout();
                return cb('error');
            });
        });

    }

    logout(){
        this.authService.logout().subscribe();
        this.authPrincipalService.identity(false);
    }

}