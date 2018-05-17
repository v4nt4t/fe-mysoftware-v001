import { Injectable } from "@angular/core";
import { Muser } from "./";
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import { createRequestHttpClientOption } from "../../shared";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


@Injectable()
export class UserManagementServices{
    
    private url = "api/musers";

    constructor(
        private http:HttpClient  
    ){}

    //tambah data
    create(data:Muser):Observable<Muser>{
        return this.http.post<Muser>(this.url, data, httpOptions);
    }

    //tambah data dan File upload
    createDataAndFile(data:Muser, file?:File):Observable<{}>{

        let formdata: FormData = new FormData();

        if(file){
            formdata.append("file", file, file.name);
        }
        
        formdata.append("muser", JSON.stringify(data));

        return this.http.post(`${this.url}/createUserAndFile`, formdata)
    }

    //ubah data
    update(data:Muser):Observable<Muser>{
        return this.http.put<Muser>(this.url, data, httpOptions);
    }

    //hapus data
    delete(id:string):Observable<{}>{
        const url = `${this.url}/${id}`;
        return this.http.delete(url, httpOptions);
    }

    //mencari semua data
    query(req:any):Observable<HttpResponse<any>>{
        const options = createRequestHttpClientOption(req);
        return this.http.get<Muser[]>(
            this.url, 
            { 
               observe: 'response',
               params:options 
            }
        );

    }

    //mencari data berdasarkan ID
    queryById(id:string):Observable<Muser>{
        const url = `${this.url}/i/${id}`;
        return this.http.get<Muser>(url);
    }

    //mencari data berdasarkan login
    queryBylogin(login:string):Observable<Muser>{
        const url = `${this.url}/lo/${login}`;
        return this.http.get<Muser>(url);

    }

    //mencari file getFile
    queryGetFile(fileName:string):Observable<any>{
        const url = `${this.url}/fileBase64/${fileName}`;
        return this.http.get(url);
    }

    //mencari data like kode
    queryLikeLogin(req:any, login:string):Observable<HttpResponse<any>>{
        const options = createRequestHttpClientOption(req);
        const url = `${this.url}/login/like/${login}`;
        return this.http.get<Muser[]>(
            url, 
            { 
               observe: 'response',
               params:options
            }
        );
    }

    //mencari data like first name
    queryLikeFn(req:any, fn:string):Observable<HttpResponse<any>>{
        const options = createRequestHttpClientOption(req);
        const url = `${this.url}/fn/like/${fn}`;
        return this.http.get<Muser[]>(
            url, 
            { 
               observe: 'response',
               params:options
            }
        );
    }
}