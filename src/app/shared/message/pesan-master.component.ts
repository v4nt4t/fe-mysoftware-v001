import { Component, OnInit } from "@angular/core";
import { PesanService } from "./pesan.service";


@Component({
    selector: 'app-pesan',
    template: `<div class="msg-position" *ngIf="pesanService.pesan">
                <div *ngFor="let pesan of pesanService.pesan">
                 <alert [type]="pesan.tipe" [dismissOnTimeout]="pesan.waktu" (onClosed)="pesanService.onClosed(pesan)">{{ pesan.pesan }}</alert>
               </div>
               <div>
               `
})
export class PesanComponent implements OnInit{

    constructor(public pesanService:PesanService){}

    ngOnInit(){

    }
}