import { Component, OnInit } from "@angular/core";
import { PesanService } from "../../../shared";

@Component({
    selector: 'app-pesan-master',
    template: `<div *ngIf="pesanService.pesan">
                <div  *ngFor="let pesan of pesanService.pesan">
                 <alert [type]="pesan.tipe" [dismissOnTimeout]="pesan.waktu" (onClosed)="pesanService.onClosed(pesan)">{{ pesan.pesan }}</alert>
               </div>
               <div>
               `
})
export class PesanMasterComponent implements OnInit{

    constructor(public pesanService:PesanService){}

    ngOnInit(){

    }
}