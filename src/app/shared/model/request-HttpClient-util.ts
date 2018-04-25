import { HttpParams } from "@angular/common/http";

export const createRequestHttpClientOption = (req?:any): HttpParams =>{
    
    if(req){

        const params = new HttpParams()
        .set('page', req.page)
        .set('size', req.size)
        .set('sort',req.sort);

        return params;
    }
}