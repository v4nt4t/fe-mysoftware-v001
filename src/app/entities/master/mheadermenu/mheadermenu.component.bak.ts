// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MheadermenuServices } from './mheadermenu.services';
// import { ResponseWrapper, ParseLinks, PesanService } from '../../../shared';
// import { Mheadermenu,  MheadermenuDeleteComponent} from './';
// import { ModalDirective } from 'ngx-bootstrap';


// @Component({
//   selector: 'app-mheadermenu',
//   templateUrl: './mheadermenu.component.html',
//   styleUrls: ['./mheadermenu.component.css']
// })
// export class MheadermenuComponentBak implements OnInit {

//   mheadermenus:Mheadermenu[];
//   totalItems:number;
//   queryCount:number;
//   links:any;
//   itemsPerPage:number;
//   pilihPages: number[];
//   predicate:string;
//   reverse:string;
//   nomor:number;
//   page:number;
//   option:any;
//   listOptions:any;
//   paramCari:string;
//   param:string;
//   idModal:string;
//   previousPage:number;

//   @ViewChild('childModal') childModal: ModalDirective;

//   constructor(
//     private mheadermenuServices:MheadermenuServices,
//     private parseLinks:ParseLinks,
//     private pesanService:PesanService
  
//   ) { }

//   ngOnInit() {
//     this.init();
//   }

//   init(){
//     this.itemsPerPage = 5;
//     this.pilihPages = [5, 10, 20];
//     this.predicate = 'kode';
//     this.reverse = 'asc';
//     this.nomor = 1;
//     this.page = 1;
//     this.previousPage = this.page;
//     this.option = {id : 0};
//     this.paramCari = ""; 
//     this.listOptions = [{ id: 0, name: "Semua Kategori" },
//                         { id: 1, name: "Kode" },
//                         { id: 2, name: "Uraian" }
//                       ];      
//   }

//   reset(){
//     this.nomor = 1;
//     this.page = 1;
//     this.predicate = 'kode';
//     this.reverse = 'asc';
//     this.mheadermenus = undefined;
//     this.previousPage = this.page;
//   }

//   sort() {
//     const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
//     if (this.predicate !== 'id') {
//         result.push('id');
//     }
//     return result;
//   }

//   onSuccess(data, headers){
//     this.links = this.parseLinks.parse(headers.get("link"));
//     this.totalItems = headers.get('X-Total-Count');
//     this.queryCount = this.totalItems;
//     this.mheadermenus = data;

//     console.log(data);
//     console.log(this.links);
//   }

//   onError(error){
//     this.pesanService.addByTipe("danger",  "Data tidak ada")
//   }

//   pilihPencarian(){
//      switch(this.option.id){
//        case 0 :{
//           this.cariSemua();
//           break;
//        }
//        case 1 :{
//           this.cariLikeKode();
//           break;
//        }
//        case 2 :{
//           this.cariLikeUraian();
//           break;
//        }
//        default:{
//           break;
//        }
//      }
//   }

//   cari(){
//     this.reset();
//     this.pilihPencarian();
//   }

//   cariSemua(){
//     this.mheadermenuServices.query({
//       page : this.page - 1,
//       size: this.itemsPerPage,
//       sort: this.sort()
//     }).subscribe(
//       (res:ResponseWrapper)=>this.onSuccess(res.json, res.headers),
//       (res:ResponseWrapper)=>this.onError(res.json));

//   }

//   cariLikeKode(){
//     this.mheadermenuServices.queryLikeKode({
//       page : this.page - 1,
//       size: this.itemsPerPage,
//       sort: this.sort()},
//       this.paramCari
//     ).subscribe(
//       (res:ResponseWrapper)=>this.onSuccess(res.json, res.headers),
//       (res:ResponseWrapper)=>this.onError(res.json));
//   }
  
//   cariLikeUraian(){
//     this.mheadermenuServices.queryLikeUraian({
//       page : this.page - 1,
//       size: this.itemsPerPage,
//       sort: this.sort()},
//       this.paramCari
//     ).subscribe(
//       (res:ResponseWrapper)=>this.onSuccess(res.json, res.headers),
//       (res:ResponseWrapper)=>this.onError(res.json));
//   }

//   openDeleteConfirm(id:string, kode:string): void {
//     this.param = kode;
//     this.idModal = id;
//     this.childModal.show();
//   }
 
//   decline(): void {
//     this.childModal.hide();
//   }

//   delete(){
//     this.mheadermenuServices.delete(this.idModal)
//     .subscribe(
//       (Response)=>{
//       this.cari();
//       this.pesanService.addByTipe("info",  "Berhasil!, Data Berhasil Dihapus")
//     },
//       (error)=>{
//         this.pesanService.addByTipe("danger",  "Gagal!, Data Gagal Dihapus")
//     });

//     this.childModal.hide();
//   }

//   pageChanged(event: any): void {
//     if (event.page != this.previousPage){
//       this.previousPage = event.page;
//       this.page = event.page;
//       this.nomor = (this.page - 1) *  this.itemsPerPage + 1;
//       this.pilihPencarian();
//     }
//   }

// }
