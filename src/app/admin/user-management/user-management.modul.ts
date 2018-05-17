import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { userManagementRoute } from "./user-management.route";
import { SharedLibModule } from "../../shared/shared-lib.module";
import { SharedModule } from "../../shared/shared.module";
import { PaginationModule, ModalModule } from "ngx-bootstrap";
import { 
    UserManagementComponent, 
    UserManagementServices, 
    UserManagementDialogComponent 
} from "./";

@NgModule({
    imports:[
        SharedLibModule,
        SharedModule,
        RouterModule.forChild(userManagementRoute),
        PaginationModule.forRoot(),
        ModalModule
    ],
    declarations:[
        UserManagementComponent,
        UserManagementDialogComponent
    ],
    providers:[
        UserManagementServices
    ],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class UserManagementModule{}
