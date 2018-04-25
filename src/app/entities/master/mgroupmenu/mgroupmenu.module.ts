import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { 
    mgroupmenuRoute, 
    MgroupmenuComponent, 
    MgroupmenuServices,
    MgroupmenuDialogComponent
} from "./";
import { PaginationModule, ModalModule } from "ngx-bootstrap";
import { SharedModule } from "../../../shared/shared.module";
import { SharedLibModule } from "../../../shared/shared-lib.module";



@NgModule({
    imports:[
        SharedLibModule,
        SharedModule,
        RouterModule.forChild(mgroupmenuRoute),
        PaginationModule.forRoot(),
        ModalModule
    ],
    declarations:[ 
        MgroupmenuComponent,
        MgroupmenuDialogComponent
    ],
    providers:[
        MgroupmenuServices
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class MgroupmenuModule{}