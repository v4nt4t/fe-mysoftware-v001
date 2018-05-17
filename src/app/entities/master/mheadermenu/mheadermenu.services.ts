import { Injectable } from "@angular/core";
import { Mheadermenu } from "./";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import { createRequestHttpClientOption } from "../../../shared";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable()
export class MheadermenuServices{
    
    private url = "api/mheadermenus";

    constructor(
        private http:HttpClient  
    ){}

    //tambah data
    create(data:Mheadermenu):Observable<Mheadermenu>{
        return this.http.post<Mheadermenu>(this.url, data, httpOptions);
    }

    //hapus data
    delete(id:string):Observable<{}>{
        const url = `${this.url}/${id}`;
        return this.http.delete(url, httpOptions);
    }

    //ubah data
    update(data:Mheadermenu):Observable<Mheadermenu>{
        return this.http.put<Mheadermenu>(this.url, data, httpOptions);
    }

    //mencari semua data
    queryAll():Observable<HttpResponse<any>>{
        const url = `${this.url}/all`;
        return this.http.get<Mheadermenu[]>(
            url, 
            { 
               observe: 'response'
            }
        );

    }

    //mencari semua data dengan pageable
    query(req:any):Observable<HttpResponse<any>>{
        const options = createRequestHttpClientOption(req);
        return this.http.get<Mheadermenu[]>(
            this.url, 
            { 
               observe: 'response',
               params:options 
            }
        );

    }

    //mencari data berdasarkan ID
    queryById(id:string):Observable<Mheadermenu>{
        const url = `${this.url}/${id}`;
        return this.http.get<Mheadermenu>(url);

    }

    //mencari data like kode
    queryLikeKode(req:any, kode:string):Observable<HttpResponse<any>>{
        const options = createRequestHttpClientOption(req);
        const url = `${this.url}/kode/like/${kode}`;
        return this.http.get<Mheadermenu[]>(
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
        return this.http.get<Mheadermenu[]>(
            url, 
            { 
               observe: 'response',
               params:options
            }
        );
    }
}