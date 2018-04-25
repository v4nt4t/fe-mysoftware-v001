import { Component, OnInit } from "@angular/core";
import { Mgroupmenu } from "./";
import { HandleErrorService, ModalPesanComponent, PesanService } from "../../../shared";
import { Router, ActivatedRoute } from "@angular/router";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { MgroupmenuServices } from "./mgroupmenu.services";
import { MheadermenuServices, Mheadermenu } from "../mheadermenu";

@Component({
    selector:"",
    templateUrl:"./mgroupmenu-dialog.component.html",

})
export class MgroupmenuDialogComponent implements OnInit{

    mgroupmenu:Mgroupmenu;
    mheadermenus:Mheadermenu[];
    dataTidakAda:boolean;
    bsModalRef: BsModalRef;

    constructor(
        private mgroupmenuService:MgroupmenuServices,
        private handleErrorService:HandleErrorService,
        private router:Router,
        private route:ActivatedRoute,
        private modalService:BsModalService,
        private mheadermenuService:MheadermenuServices,
        private pesanService:PesanService
    ){}

    ngOnInit(){
        this.init();
        this.queryMheadermenu();

        this.route.params.subscribe((params)=>{
            if(params['id']){
                this.load(params['id']);
            }
        });
    }

    init(){
        this.mgroupmenu = {
            id: null, 
            kode: null,
            groupmenu: null,
            allowedf: false,
            urutan: null,
            mheadermenu:{id:null}
        };
        this.dataTidakAda = true;
    }

    save(){
        if(this.mgroupmenu.id != null){
            this.mgroupmenuService.update(this.mgroupmenu)
            .subscribe(
                data=>this.onSuccesSave(data),
                error=>this.onErrorSave(error))
        }else{
            this.mgroupmenuService.create(this.mgroupmenu)
            .subscribe( 
                data=>this.onSuccesSave(data),
                error=>this.onErrorSave(error))
        }
    }

    onSuccesSave(data){
        this.mgroupmenu = data;
        this.pesanService.add("Pesan!!, data Berhasil Simpan.");    
        this.router.navigate(['/mgroupmenu']);
    }

    onErrorSave(error){
        const pesan = "Pesan!!, data gagal Simpan.";
        this.handleErrorService.handleError(error, pesan);
    }

    reset(){
        this.mgroupmenu = {
            id:null, 
            kode:null,
            groupmenu:null,
            allowedf:false,
            urutan:null,
            mheadermenu:{id:null}
        };
    }

    load(id){
        this.mgroupmenuService.queryById(id).subscribe((mgroupmenu)=>{
            this.mgroupmenu = mgroupmenu;
            this.getStatusData();
        }
    )}

    queryMheadermenu(){
        this.mheadermenuService.queryAll()
        .subscribe(
            data =>  this.mheadermenus = data.body,
            error => this.handleErrorService.handleError(error, "Data Mheadermenu tidak bisa di load")
        );
    }

    getStatusData(){
        if(this.mgroupmenu){
            this.dataTidakAda = false;
        }else{
            this.dataTidakAda = true;
        }
    }

}