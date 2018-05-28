import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { Mmenuuser } from "./";
import { createRequestHttpClientOption } from "../../shared";


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


@Injectable()
export class UserManagementMenuServices{
    private url = "api/mmenuusers";

    constructor(
        private http:HttpClient 
    ){}

    //tambah data
    create(data:Mmenuuser):Observable<Mmenuuser>{
        return this.http.post<Mmenuuser>(this.url, data, httpOptions);
    }

    //ubah data
    update(data:Mmenuuser):Observable<Mmenuuser>{
        return this.http.put<Mmenuuser>(this.url, data, httpOptions);
    }

    //hapus data
    delete(id:string):Observable<{}>{
        const url = `${this.url}/${id}`;
        return this.http.delete(url, httpOptions);
    }

    //mencari data berdasarkan muser id
    queryByMuserId(req:any, id:string):Observable<HttpResponse<any>>{
        const options = createRequestHttpClientOption(req);

        const url = `${this.url}/muser/id/${id}`;
        return this.http.get<Mmenuuser[]>(
            url,
            { 
                observe: 'response',
                params:options
            }
        );
    }

    //mencari data berdasarkan ID
    queryById(id:string):Observable<Mmenuuser>{
        const url = `${this.url}/id/${id}`;
        return this.http.get<Mmenuuser>(url);
    }

    //mencari data untuk sidebar menu
    queryForSidebarMenu(id:string):Observable<HttpResponse<any>>{
        const url = `${this.url}/menuSideBar/muser/id/${id}`;
        return this.http.get(
            url, 
            { 
                observe: 'response'
            }
        );

    }
}