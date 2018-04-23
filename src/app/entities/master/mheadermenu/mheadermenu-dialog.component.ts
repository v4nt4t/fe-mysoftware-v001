import { Component, OnInit, TemplateRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MheadermenuServices } from "./mheadermenu.services";
import { Mheadermenu } from "./mheadermenu.model";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalPesanComponent, PesanService } from "../../../shared";

@Component({
    selector:"mheadermenu-dialog",
    templateUrl:"mheadermenu-dialog.component.html"
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
        private pesanService: PesanService
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
                (data:Mheadermenu)=>this.onSuccesSave(data),
                (data:Mheadermenu)=>this.onErrorSave(data))
        }else{
            this.mheadermenuService.create(this.mheadermenu)
            .subscribe( 
                (data:Mheadermenu)=>this.onSuccesSave(data),
                (data:Mheadermenu)=>this.onErrorSave(data))
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

    onErrorSave(data){
        this.pesanService.addByTipe("danger", "Gagal!, data gagal Simpan.")
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
