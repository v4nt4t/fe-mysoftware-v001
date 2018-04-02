import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LoginService{

    //status login
    loginSucces:boolean = false;

    constructor(
        private authService: AuthService
    ){}

    login(credentials, callback?) {
        const cb = callback || function() {};

        return new Promise((resolve, reject) => {

            //cek login
            this.authService.login(credentials).subscribe(() => {
                this.loginSucces = true;
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
        this.loginSucces = false;
    }

    isAuthenticated():boolean{
        return this.loginSucces
    }
}