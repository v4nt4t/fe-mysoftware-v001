import { Component, OnInit, TemplateRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MheadermenuServices } from "./mheadermenu.services";
import { Mheadermenu } from "./";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalPesanComponent, HandleErrorService } from "../../../shared";

@Component({
    selector:"app-mheadermenu-dialog",
    templateUrl:"./mheadermenu-dialog.component.html"
})

export class MheadermenuDialogComponent implements OnInit{
   
    mheadermenu:Mheadermenu;
    dataTidakAda:boolean;
    bsModalRef: BsModalRef;

    constructor(
        private route: ActivatedRoute,
        private router:Router,
        private mheadermenuService: MheadermenuServices,
        private modalService: BsModalService,
        private handleErrorService:HandleErrorService
    ){}

    ngOnInit(){

        this.init();

        this.route.params.subscribe((params)=>{
            if(params['id']){
                this.load(params['id']);
            }           
        });

    }

    init(){
        this.mheadermenu = {
            id:null, 
            kode:null,
            headermenu:null,
            allowedf:false 
        };
        this.dataTidakAda = true;
    }

    save(){
        
        if(this.mheadermenu.id != null){
            this.mheadermenuService.update(this.mheadermenu)
            .subscribe(
                data=>this.onSuccesSave(data),
                error=>this.onErrorSave(error))
        }else{
            this.mheadermenuService.create(this.mheadermenu)
            .subscribe( 
                data=>this.onSuccesSave(data),
                error=>this.onErrorSave(error))
        }
    }

    reset(){
        this.mheadermenu = {
            id:null, 
            kode:null,
            headermenu:null,
            allowedf:false 
        };
    }

    load(id){
        this.mheadermenuService.queryById(id).subscribe((mheadermenu)=>{
            this.mheadermenu = mheadermenu;
            this.getStatusData();
        }
    )}

    getStatusData(){
        if(this.mheadermenu){
            this.dataTidakAda = false;
        }else{
            this.dataTidakAda = true;
        }
    }

    onSuccesSave(data){
        this.mheadermenu = data;
        this.modalPesan(data.kode);        
        this.router.navigate(['/mheadermenu']);
        
    }

    onErrorSave(error){
        const pesan = "Pesan!!: data gagal Simpan.";
        this.handleErrorService.handleError(error, pesan);
    }

    modalPesan(pesan:string) {
        const initialState = {
            list: [
              'Data dengan kode '+ pesan + ' Berhasil Disimpan'
            ],
            title: 'Pesan'
          };
          this.bsModalRef = this.modalService.show(ModalPesanComponent, {initialState});
    }
}
