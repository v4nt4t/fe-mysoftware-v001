import { Component, OnInit, Input } from "@angular/core";
import { Muser, MuserVM } from "./user-management.model";
import { UserManagementServices } from "./user-management.services";
import { HandleErrorService, PesanService } from "../../shared";

@Component({
    selector: 'app-user-management-reset-password',
    templateUrl: './user-management-reset-password.component.html'
})
export class UserManagementResetPasswordComponent implements OnInit {
    
    @Input() muser:Muser;

    pass:string;
    konfirmasiPass:string;
    muserVM:MuserVM;
    
    constructor(
        private userManagementServices:UserManagementServices,
        private handleErrorService:HandleErrorService,
        private pesanService:PesanService
    ){}

    ngOnInit(){
        this.init();
    }

    init(){
        this.pass = null;
        this.konfirmasiPass = null;
    }

    mapUser(){
        this.muserVM = this.muser;
        this.muserVM.password = this.pass;
    }

    resetPassword(){
        if(this.pass === this.konfirmasiPass){

            this.mapUser();

            this.userManagementServices.resetPassword(this.muserVM)
            .subscribe(
                data=>this.onSuccess(data),
                error=>this.onError(error));

        }else{
            console.log("password dan konfirmasi berbeda");
        }
    }

    onSuccess(data){
        this.pesanService.add("Pesan!!, Password Berhasil Simpan."); 
    }
    onError(error){
        const pesan = "Pesan!!, Password gagal Simpan.";
        this.handleErrorService.handleError(error, pesan);
    }
}