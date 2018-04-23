import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModalModule, PaginationModule } from "ngx-bootstrap";

import { 
    mheadermenuRoute, 
    MheadermenuComponent, 
    MheadermenuServices, 
    MheadermenuDialogComponent,
    MheadermenuDeleteComponent
} from "./";
import { SharedMasterModule } from "../shared/shared-master.module";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule.forChild(mheadermenuRoute),
        AngularFontAwesomeModule,
        ModalModule,
        PaginationModule.forRoot(),
        SharedMasterModule
    ],
    declarations:[
        MheadermenuComponent,
        MheadermenuDialogComponent,
        MheadermenuDeleteComponent
    ],
    providers:[
        MheadermenuServices
    ],
    entryComponents:[
        MheadermenuDeleteComponent
    ]
})

export class mheadermenuModule{}