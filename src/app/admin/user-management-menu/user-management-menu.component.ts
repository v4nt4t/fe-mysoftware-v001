import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Muser } from "../user-management";
import { UserManagementMenuServices } from "./user-management-menu.service";
import { HandleErrorService, ParseLinks, PesanService } from "../../shared";
import { Mmenuuser } from ".";
import { ModalDirective } from "ngx-bootstrap";


@Component({
    selector: 'app-user-management-menu',
    templateUrl: './user-management-menu.component.html'
  })
  export class UserManagementMenuComponent implements OnInit {

    @Input() muser:Muser;

    mmenuusers:Mmenuuser[];
    totalItems:number;
    queryCount:number;
    links:any;
    itemsPerPage:number;
    predicate:string;
    reverse:string;
    nomor:number;
    page:number;
    param:string;
    previousPage:number;
    idModal:string;

    constructor(
      private userManagementMenuService:UserManagementMenuServices,
      private handleErrorService:HandleErrorService,
      private parseLinks:ParseLinks,
      private pesanService:PesanService
    ){}

    @ViewChild('childModal') childModal: ModalDirective;

    ngOnInit(){
      this.init();
      this.loadByUserId();
    }

    init(){
      this.itemsPerPage = 5;
      this.predicate = 'mmenu.menu';
      this.reverse = 'asc';
      this.nomor = 1;
      this.page = 1;
      this.previousPage = this.page; 
    }

    loadByUserId(){
        this.userManagementMenuService.queryByMuserId({
          page : this.page - 1,
          size: this.itemsPerPage,
          sort: this.sort()
        },
        this.muser.id
      ).subscribe(
          res=>this.onSuccess(res.body, res.headers),
          error=>this.onError(error));
    }

    sort() {
      const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
      return result;
    }
  
    onSuccess(data, headers){
      this.links = this.parseLinks.parse(headers.get("link"));
      this.totalItems = headers.get('X-Total-Count');
      this.queryCount = this.totalItems;
      this.mmenuusers = data;
    }
  
    onError(error){
      this.handleErrorService.handleError(error, "Pesan: Pencarian, Data Tidak Ada !");
    }

    pageChanged(event: any): void {
      if (event.page != this.previousPage){
        this.previousPage = event.page;
        this.page = event.page;
        this.nomor = (this.page - 1) *  this.itemsPerPage + 1;
        this.loadByUserId();
      }
    }

    openDeleteConfirm(id:string, param:string): void {
      this.param = param;
      this.idModal = id;
      this.childModal.show();
    }

    decline(): void {
      this.childModal.hide();
    }
   
    delete(){
      this.userManagementMenuService.delete(this.idModal)
      .subscribe(
        x=>{
        this.reset();
        this.loadByUserId();
        this.pesanService.addByTipe("info",  "Pesan!!, Data Berhasil Dihapus")
      },
        e=>{
          this.handleErrorService.handleError(e, "Pesan!! : hapus, Data Gagal Dihapus");
      });
   
      this.childModal.hide();
    }

    reset(){
      this.nomor = 1;
      this.page = 1;
      this.predicate = 'id';
      this.reverse = 'asc';
      this.mmenuusers = undefined;
      this.previousPage = this.page;
    }
  }