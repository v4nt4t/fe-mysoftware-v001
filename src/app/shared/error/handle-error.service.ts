import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { PesanService } from "../message/pesan.service";

@Injectable()
export class HandleErrorService{

    constructor(
        private pesanService:PesanService
    ){}

    handleError(error: HttpErrorResponse, message?:string){
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
          }

        if(!message){return};
        this.pesanService.addByTipe('danger',message);
    };

}