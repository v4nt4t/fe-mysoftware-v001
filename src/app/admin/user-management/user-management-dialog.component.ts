import { Component, OnInit } from "@angular/core";
import { Muser } from "./user-management.model";
import { UserManagementServices } from "./user-management.services";
import { PesanService, HandleErrorService } from "../../shared";
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";

  @Component({
  selector: 'app-user-management-dialog',
  templateUrl: './user-management-dialog.component.html'
  })
  export class UserManagementDialogComponent implements OnInit {

    muser:Muser;
    url:any = "assets/img/user-icon.png";
    selectedFiles:FileList;
    currentFileUpload: File;
    dataTidakAda:boolean;
    private readonly imageType : string = 'data:image/PNG;base64,';

    constructor(
      private userManagementServices:UserManagementServices,
      private handleErrorService:HandleErrorService,
      private router:Router,
      private route:ActivatedRoute,
      private pesanService:PesanService,
      private userManagement:UserManagementServices,
      private sanitizer: DomSanitizer
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
      this.muser = {
          id: null, 
          login: null,
          firstName: null,
          lastName: null,
          email: null,
          imageUrl:null,
          activated:false
      };
    }

    load(id){
      this.userManagementServices.queryById(id).subscribe((muser)=>{
          this.muser = muser;
          this.getStatusData();

          if (muser.imageUrl !== null && muser.imageUrl !== ''){
            this.loadFile(muser.id);
          }
          
      }
    )}

    loadFile(id:string){
      this.userManagementServices.queryGetFile(id).subscribe((data)=>{

        this.url = this.sanitizer.bypassSecurityTrustUrl(this.imageType + data.content);

      })
    }

    onSelectFile(event) { // called each time file input changes

      //cek file upload harus image
      const file = event.target.files.item(0)
      if (file.type.match('image.*')) {
        this.selectedFiles = event.target.files;

        if (this.selectedFiles && this.selectedFiles[0]) {
          var reader = new FileReader();

          reader.readAsDataURL(this.selectedFiles[0]); // read file as data url
          reader.onload = (imgsrc:any) => { // called once readAsDataURL is completed
              this.url = imgsrc.target.result;
          }
        }
        
      } else {
        alert('invalid format!');
      }
    }

    saveUpload(){

      if(this.selectedFiles && this.selectedFiles[0]){
        this.currentFileUpload = this.selectedFiles.item(0);
      }else{
        this.currentFileUpload = null;
      }
      
      this.userManagementServices.updateDataAndFile(this.muser, this.currentFileUpload)
      .subscribe( 
          data=>this.onSuccesSave(data),
          error=>this.onErrorSave(error));
    }

    onSuccesSave(data){
      this.muser = data;
      this.pesanService.add("Pesan!!, data Berhasil Simpan.");    
      this.router.navigate(['/user-management']);
    }

    onErrorSave(error){
      const pesan = "Pesan!!, data gagal Simpan.";
      this.handleErrorService.handleError(error, pesan);
    }

    getStatusData(){
      if(this.muser){
          this.dataTidakAda = false;
      }else{
          this.dataTidakAda = true;
      }
  }

}

  