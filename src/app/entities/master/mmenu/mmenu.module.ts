import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { 
    mmenuRoutes, 
    MmenuComponent,
    MmenuServices,
    MmenuDialogComponent
} from "./";
import { SharedLibModule } from "../../../shared/shared-lib.module";
import { PaginationModule, ModalModule } from "ngx-bootstrap";
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
    imports:[
        SharedLibModule,
        SharedModule,
        RouterModule.forChild(mmenuRoutes),
        PaginationModule.forRoot(),
        ModalModule
    ],
    declarations:[
        MmenuComponent,
        MmenuDialogComponent
    ],
    providers:[MmenuServices],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MmenuModule{}