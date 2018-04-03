import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { LocalStorageService, SessionStorageService } from "ngx-webstorage";


@Injectable()
export class AuthService {

    constructor(        
        private $localStorage: LocalStorageService,
        private $sessionStorage: SessionStorageService
    ){}

    login(credentials: any): Observable<boolean> {

        const data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };

        return new Observable((observer) => {

            //hardcode user login
            if(data.username == "admin" && data.password =="admin"){
                this.storeAuthenticationToken('12345678910',data.rememberMe);
                observer.next();
            }else{
                observer.error();
            }

        });
    }

    logout(): Observable<any> {
        return new Observable((observer) => {
            this.$localStorage.clear('authenticationToken');
            this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    }

    //menyimpan authentication ke local dan session storage
    storeAuthenticationToken(token, rememberMe) {
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', token);
        } else {
            this.$sessionStorage.store('authenticationToken', token);
        }
    }

    getToken() {
        return this.$localStorage.retrieve('authenticationToken') 
            || this.$sessionStorage.retrieve('authenticationToken');
    }
}