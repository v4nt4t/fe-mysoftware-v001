import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserManagementMenuServices } from '../../admin/user-management-menu';

import { error } from 'protractor';
import { AccountServices, HandleErrorService } from '../../shared';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {

  isCollapsed  = [];
  isMultiCollapsed = [];
  mmenuusers:any[];
  currentUser:any;
  mmenus:any[];
  mgroupmenus:any[];
  mheadermenus:any[];
  arrow:string;

  constructor(
    private userManagementMenuServices:UserManagementMenuServices,
    private accountServices:AccountServices,
    private handleErrorService:HandleErrorService,
    private cdr: ChangeDetectorRef
  ) { } 

  ngOnInit() {
    this.load();
  }

  load(){
  
    //memdapatkan current user
    this.accountServices.get().toPromise().then((account) =>{
        //mendapatkan user menu
        this.userManagementMenuServices.queryForSidebarMenu(account.id)
        .subscribe((mmenuusers)=>{
          this.mmenuusers = mmenuusers.body;
          
          this.setGoupmenu(this.mmenuusers);
        },
        (e)=>{
          this.handleErrorService.handleError(e, "menu User tidak bisa di load")
        })
    }).catch((error)=>{
      this.handleErrorService.handleError(error, "Current User tidak bisa di load")
    });
  }

  // setMenu(mmenuusers){
  //   // set mmenu
  //   const mmenus = [];
  //   for (const mmenuuser of mmenuusers) {
  //     mmenus.push({
  //       menu:mmenuuser.mmenuMenu, 
  //       objek:mmenuuser.mmenuObjek, 
  //       urutan:mmenuuser.mmenuUrutan
  //     });
  //     this.mmenus = mmenus;
  //   }

  //   this.setGoupmenu(mmenuusers);
  //   this.setHeadermenu(mmenuusers);
  // }

  setGoupmenu(mmenuusers){
    const mgroupmenus = [];
    
    for (let i = 0; i < mmenuusers.length; i++) {
      if(i === 0){
        mgroupmenus.push({
          id:mmenuusers[i].mgroupmenuId,
          groupmenu:mmenuusers[i].mgroupmenuGroupmenu,
          urutan:mmenuusers[i].mgroupmenuUrutan,
          mheadermenuId:mmenuusers[i].mheadermenuId
        });
      }else if(i > 0){
        if(mmenuusers[i].mgroupmenuId === mmenuusers[i-1].mgroupmenuId){
          continue;
        }

        mgroupmenus.push({
          id:mmenuusers[i].mgroupmenuId,
          groupmenu:mmenuusers[i].mgroupmenuGroupmenu,
          urutan:mmenuusers[i].mgroupmenuUrutan,
          mheadermenuId:mmenuusers[i].mheadermenuId
        });
      }
    }
    this.mgroupmenus = mgroupmenus;
    this.setHeadermenu(mmenuusers);
  }

  setHeadermenu(mmenuusers){
    const mheadermenus = [];

    for (let i = 0; i < mmenuusers.length; i++) {
      if(i === 0){
        mheadermenus.push({
          id:mmenuusers[i].mheadermenuId,
          headermenu:mmenuusers[i].mheadermenuHeadermenu,
          urutan:mmenuusers[i].mheadermenuUrutan
        });
      }else if(i > 0){
        if(mmenuusers[i].mheadermenuId === mmenuusers[i-1].mheadermenuId){
          continue;
        }

        mheadermenus.push({
          id:mmenuusers[i].mheadermenuId,
          headermenu:mmenuusers[i].mheadermenuHeadermenu,
          urutan:mmenuusers[i].mheadermenuUrutan
        });
      }
    }
    this.mheadermenus = mheadermenus;
  }



}



