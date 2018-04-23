import { Component } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap";
import { MheadermenuServices } from "./mheadermenu.services";
import { Router } from "@angular/router";

@Component({
    selector:'mheadermenu-delete',
    templateUrl:'mheadermenu-delete.component.html'
})
export class MheadermenuDeleteComponent{
    
    id:string;
    param:string;

    constructor(
        public bsModalRef: BsModalRef,
        private mheadermenuServices:MheadermenuServices,
        private router:Router
    ) {}
   
    ngOnInit() {
        
    }

    confirm(): void {
        this.delete(this.id);
    }
     
    decline(): void {
        this.bsModalRef.hide()
    }

    delete(id:string){
        this.mheadermenuServices.delete(id).subscribe((Response)=>{
            this.bsModalRef.hide();
        });
    }
}