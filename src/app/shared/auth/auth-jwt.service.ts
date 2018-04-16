import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable, Observer } from 'rxjs/Rx';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';



@Injectable()
export class AuthServerProvider{

    constructor(
        private http:Http,
        private $localStorage: LocalStorageService,
        private $sessionStorage: SessionStorageService
    ){}

    
    login(credentials):Observable<any>{
        const data = {
            username : credentials.username,
            password : credentials.password,
            rememberMe : credentials.rememberMe
        };

        return this.http.post('api/authenticate', data).map(authenticateSuccess.bind(this));

        function authenticateSuccess(resp){
            const bearerToken = resp.headers.get('Authorization');

            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                const jwt = bearerToken.slice(7, bearerToken.length);
                this.storeAuthenticationToken(jwt, credentials.rememberMe);
                return jwt;
            }
            
        }

    }


    getToken(){
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    }

    storeAuthenticationToken(jwt, rememberMe) {
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        } else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    }

    logout(): Observable<any> {

        return new Observable((observer) => {
            this.$localStorage.clear('authenticationToken');
            this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    }
}