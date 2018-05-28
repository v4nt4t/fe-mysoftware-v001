import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
@Injectable()
export class AccountServices{
    private url = "api/account";

    constructor(
        private http:HttpClient  
    ){}

    //mendapatkan current user login
    get():Observable<any>{
        const url = `${this.url}`;
        return this.http.get(url);
    }
}