import { Injectable } from '@angular/core';
import { AuthPrincipalService } from '../auth/auth-principal.service';
import { AuthServerProvider } from '../auth/auth-jwt.service';


@Injectable()
export class LoginService{

    constructor(
        private authService: AuthServerProvider,
        private authPrincipalService: AuthPrincipalService
    ){}

    login(credentials, callback?) {
        // const cb = callback || function() {};

        return new Promise((resolve, reject) => {

            //melakukan login
            this.authService.login(credentials).subscribe(() => {
                //jika berhasil maka ambil data account
                this.authPrincipalService.identity(true);
                resolve();
            },(err) =>{
                this.logout();
                reject(err);
            });
        });

    }

    logout(){
        this.authService.logout().subscribe();
        this.authPrincipalService.identity(false);
    }

}