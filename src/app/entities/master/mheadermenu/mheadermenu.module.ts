import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ModalModule, PaginationModule } from "ngx-bootstrap";

import { 
    mheadermenuRoute, 
    MheadermenuComponent, 
    MheadermenuServices, 
    MheadermenuDialogComponent
} from "./";
import { SharedModule } from "../../../shared/shared.module";
import { SharedLibModule } from "../../../shared/shared-lib.module";


@NgModule({
    imports:[
        RouterModule.forChild(mheadermenuRoute),
        ModalModule,
        PaginationModule.forRoot(),
        SharedModule,
        SharedLibModule
    ],
    declarations:[
        MheadermenuComponent,
        MheadermenuDialogComponent
    ],
    providers:[
        MheadermenuServices
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class mheadermenuModule{}