// import { Injectable } from "@angular/core";
// import { Http, Response } from "@angular/http";
// import { Observable } from 'rxjs/Rx';
// import { createRequestOption, ResponseWrapper } from "../../../shared";
// import { Mheadermenu } from "./mheadermenu.model";

// @Injectable()
// export class MheadermenuServices{
    
//     private url = "api/mheadermenus"

//     constructor(private http:Http){}

//     create(mheadermenu:Mheadermenu): Observable<Mheadermenu>{
//         const copy = this.convert(mheadermenu);
//         return this.http.post(this.url, copy).map((res:Response)=>{
//             const jsonResponse = res.json();
//             return this.convertItemFromServer(jsonResponse)
//         })
//     }

//     update(mheadermenu:Mheadermenu): Observable<Mheadermenu>{
//         const copy = this.convert(mheadermenu);
//         return this.http.put(this.url, copy).map((res:Response)=>{
//             const jsonResponse = res.json();
//             return this.convertItemFromServer(jsonResponse)
//         })
//     }

//     delete(id:string):Observable<Response>{
//         return this.http.delete(`${this.url}/${id}`);
//     }
//     query(req?: any): Observable<any>{
//          const options = createRequestOption(req);
        
//         return this.http.get(this.url, options)
//                .map((res:Response) =>this.convertResponse(res));
//     }

//     queryById(id): Observable<any>{
    
//        return this.http.get(`${this.url}/${id}`)
//               .map((res:Response) =>{

//             const jsonResponse = res.json();

//             return this.convertItemFromServer(jsonResponse);

//         });
//    }

//     queryLikeKode(req:any, kode:string): Observable<any>{
//         const options = createRequestOption(req);
        
//         return this.http.get(`${this.url}/like/kode/${kode}`, options)
//                .map((res:Response) =>this.convertResponse(res));
//     }

//     queryLikeUraian(req:any, uraian:string): Observable<any>{
//         const options = createRequestOption(req);

//         return this.http.get(`${this.url}/like/uraian/${uraian}`, options)
//         .map((res:Response) =>this.convertResponse(res));
//     }

//     private convertResponse(res: Response): ResponseWrapper {
//         const jsonResponse = res.json();
//         return new ResponseWrapper(res.headers, jsonResponse, res.status);
//     }

//        /**
//      * Convert a returned JSON object to Mheadermenu.
//      */
//     private convertItemFromServer(json: any): Mheadermenu {
//         const entity: Mheadermenu = Object.assign(new Mheadermenu(), json);
//         return entity;
//     }

//      /**
//      * Convert a Mheadermenu to a JSON which can be sent to the server.
//      */
//     private convert(mheadermenu: Mheadermenu): Mheadermenu {
//         const copy: Mheadermenu = Object.assign({}, mheadermenu);
//         return copy;
//     }
// }