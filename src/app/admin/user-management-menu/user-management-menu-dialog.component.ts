import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserManagementMenuServices } from "./user-management-menu.service";
import { Mmenuuser } from "./";
import { MmenuServices, Mmenu } from "../../entities/master/mmenu";
import { HandleErrorService, PesanService } from "../../shared";
import { UserManagementServices, Muser } from "../user-management";

@Component({
    selector: 'app-user-management-menu-dialog',
    templateUrl: './user-management-menu-dialog.component.html'
  })
  export class UserManagementMenuDialogComponent implements OnInit {

    mmenuuser:Mmenuuser;
    mmenus:Mmenu[];
    muser:Muser;

    constructor( 
      private userManagementMenuService:UserManagementMenuServices,
      private route:ActivatedRoute,
      private mmenuService:MmenuServices,
      private handleErrorService:HandleErrorService,
      private pesanService:PesanService,
      private userManagementServices:UserManagementServices,
      private router:Router
    ){}

    ngOnInit(){
      this.init();
      this.queryMmenu();

      this.route.params.subscribe((params)=>{
        if(params['id']){
            this.load(params['id']);
        }

        if(params['muserid']){
          this.queryMuserById(params['muserid']);
        }
      });
    }

    init(){
      this.mmenuuser = {
        id: null,
        muser:{id:null},
        mmenu:{id:null},
        allowedf:false
      };
    }

    load(id:string){
      this.userManagementMenuService.queryById(id)
      .subscribe((mmenuuser)=>{
        this.mmenuuser = mmenuuser;
         
      })
    }

    queryMmenu(){
      this.mmenuService.queryAll()
      .subscribe(
          data =>  this.mmenus = data.body,
          error => this.handleErrorService.handleError(error, "Data mmenu tidak bisa di load")
      );
    }

    queryMuserById(muserid:string){
      this.userManagementServices.queryById(muserid)
      .subscribe(
        data =>  this.mmenuuser.muser = data,
        error => this.handleErrorService.handleError(error, "Data muser tidak bisa di load")
      );
    }

    previousState() {
      // window.history.back();
      this.router.navigate(['/user-management/'+this.mmenuuser.muser.id+'/edit'])
    }

    save(){
      if(this.mmenuuser.id != null){
        this.userManagementMenuService.update(this.mmenuuser)
        .subscribe(
            data=>this.onSuccesSave(data),
            error=>this.onErrorSave(error))
      }else{
        this.userManagementMenuService.create(this.mmenuuser)
        .subscribe( 
            data=>this.onSuccesSave(data),
            error=>this.onErrorSave(error))
      }
    }

    onSuccesSave(data){
      this.pesanService.add("Pesan!!, data Berhasil Simpan.");    
      this.previousState();
    }

    onErrorSave(error){
        const pesan = "Pesan!!, data gagal Simpan.";
        this.handleErrorService.handleError(error, pesan);
    }

}