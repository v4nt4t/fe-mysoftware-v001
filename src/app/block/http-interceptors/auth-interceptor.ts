import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { LocalStorageService, SessionStorageService } from "ngx-webstorage";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(
        private localStorage:LocalStorageService,
        private sessionStorage:SessionStorageService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler){

        //get token
        const authToken = this.localStorage.retrieve('authenticationToken') || 
                      this.sessionStorage.retrieve('authenticationToken');                  

       // Clone the request and replace the original headers with
       // cloned headers, updated with the authorization.
       const authReq = req.clone({
            headers: req.headers.set('Authorization','Bearer ' + authToken) 
       })

       // send cloned request with header to the next handler.
       return next.handle(authReq);

    }

}