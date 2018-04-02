import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';


@Injectable()
export class AuthService {

    constructor(        
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
                observer.next();
            }else{
                observer.error();
            }

        });
    }

    logout(): Observable<any> {
        return new Observable((observer) => {
            observer.complete();
        });
    }
}