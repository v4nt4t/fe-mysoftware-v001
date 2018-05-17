import { Injectable } from "@angular/core";
import { Mmenu } from "./";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import { createRequestHttpClientOption } from "../../../shared";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
@Injectable()
export class MmenuServices{
    
    private url = "api/mmenus";

    constructor(
        private http:HttpClient  
    ){}

    //tambah data
    create(data:Mmenu):Observable<Mmenu>{
        return this.http.post<Mmenu>(this.url, data, httpOptions);
    }

    //hapus data
    delete(id:string):Observable<{}>{
        const url = `${this.url}/${id}`;
        return this.http.delete(url, httpOptions);
    }

    //ubah data
    update(data:Mmenu):Observable<Mmenu>{
        return this.http.put<Mmenu>(this.url, data, httpOptions);
    }

    //mencari semua data
    query(req:any):Observable<HttpResponse<any>>{
        const options = createRequestHttpClientOption(req);
        return this.http.get<Mmenu[]>(
            this.url, 
            { 
               observe: 'response',
               params:options 
            }
        );

    }

    //mencari semua data tanpa pagination
    queryAll():Observable<HttpResponse<any>>{
        const url = `${this.url}/all`;
        return this.http.get<Mmenu[]>(
            url, 
            { 
               observe: 'response'
            }
        );

    }

    //mencari data berdasarkan ID
    queryById(id:string):Observable<Mmenu>{
        const url = `${this.url}/${id}`;
        return this.http.get<Mmenu>(url);

    }

    //mencari data like kode
    queryLikeKode(req:any, kode:string):Observable<HttpResponse<any>>{
        const options = createRequestHttpClientOption(req);
        const url = `${this.url}/kode/like/${kode}`;
        return this.http.get<Mmenu[]>(
            url, 
            { 
               observe: 'response',
               params:options
            }
        );
    }

    //mencari data like uraian
    queryLikeUraian(req:any, uraian:string):Observable<HttpResponse<any>>{
        const options = createRequestHttpClientOption(req);
        const url = `${this.url}/uraian/like/${uraian}`;
        return this.http.get<Mmenu[]>(
            url, 
            { 
               observe: 'response',
               params:options
            }
        );
    }
}