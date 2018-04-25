import { Injectable } from "@angular/core";
import { AlertComponent } from "ngx-bootstrap";


@Injectable()
export class PesanService{

    pesan:any[]=[];

    private waktu:number = 3000;
    private tipe:string = "info";

    add(pesan:string):void {
        this.pesan.push({tipe:this.tipe, pesan:pesan, waktu:this.waktu});
    }
    
    addByTipe(tipe:string, pesan:string):void {
        this.pesan.push({tipe:tipe, pesan:pesan, waktu:this.waktu});
    }

    onClosed(dismissedAlert: AlertComponent):void {
        this.pesan = this.pesan.filter(alert => alert !== dismissedAlert);
    }
}
