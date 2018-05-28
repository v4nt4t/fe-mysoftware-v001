import { Component, OnInit } from "@angular/core";
import { Mmenu } from "./";
import { HandleErrorService, PesanService } from "../../../shared";
import { Router, ActivatedRoute } from "@angular/router";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { MgroupmenuServices, Mgroupmenu } from "../mgroupmenu";
import { MmenuServices } from "./mmenu.services";

@Component({
    selector:'app-menu-dialog',
    templateUrl: './mmenu-dialog.component.html'
})
export class MmenuDialogComponent implements OnInit{
    mmenu:Mmenu;
    mgroupmenus:Mgroupmenu[];
    dataTidakAda:boolean;
    bsModalRef: BsModalRef;

    constructor(
        private mmenuService:MmenuServices,
        private handleErrorService:HandleErrorService,
        private router:Router,
        private route:ActivatedRoute,
        private modalService:BsModalService,
        private mgroupmenuService:MgroupmenuServices,
        private pesanService:PesanService
    ){}

    ngOnInit(){
        this.init();
        this.queryMgroupmenu();

        this.route.params.subscribe((params)=>{
            if(params['id']){
                this.load(params['id']);
            }
        });
    }

    init(){
        this.mmenu = {
            id: null, 
            kode: null,
            menu: null,
            objek: null,
            allowedf: false,
            urutan: null,
            mgroupmenu:{id:null}
        };
        this.dataTidakAda = true;
    }

    save(){
        if(this.mmenu.id != null){
            this.mmenuService.update(this.mmenu)
            .subscribe(
                data=>this.onSuccesSave(data),
                error=>this.onErrorSave(error))
        }else{
            this.mmenuService.create(this.mmenu)
            .subscribe( 
                data=>this.onSuccesSave(data),
                error=>this.onErrorSave(error))
        }
    }

    onSuccesSave(data){
        this.mmenu = data;
        this.pesanService.add("Pesan!!, data Berhasil Simpan.");    
        this.router.navigate(['/mmenu']);
    }

    onErrorSave(error){
        const pesan = "Pesan!!, data gagal Simpan.";
        this.handleErrorService.handleError(error, pesan);
    }

    reset(){
        this.mmenu = {
            id:null, 
            kode:null,
            menu:null,
            objek:null,
            allowedf:false,
            urutan:null,
            mgroupmenu:{id:null}
        };
    }

    load(id){
        this.mmenuService.queryById(id).subscribe((mmenu)=>{
            this.mmenu = mmenu;
            this.getStatusData();
        }
    )}

    queryMgroupmenu(){
        this.mgroupmenuService.queryAll()
        .subscribe(
            data =>  this.mgroupmenus = data.body,
            error => this.handleErrorService.handleError(error, "Data mgroupmenu tidak bisa di load")
        );
    }

    getStatusData(){
        if(this.mmenu){
            this.dataTidakAda = false;
        }else{
            this.dataTidakAda = true;
        }
    }
}