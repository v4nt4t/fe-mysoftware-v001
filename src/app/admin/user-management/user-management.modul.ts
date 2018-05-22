import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { userManagementRoute } from "./user-management.route";
import { SharedLibModule } from "../../shared/shared-lib.module";
import { SharedModule } from "../../shared/shared.module";
import { PaginationModule, ModalModule, TabsModule } from "ngx-bootstrap";
import { 
    UserManagementComponent, 
    UserManagementServices, 
    UserManagementDialogComponent,
    UserManagementResetPasswordComponent
} from "./";

@NgModule({
    imports:[
        SharedLibModule,
        SharedModule,
        RouterModule.forChild(userManagementRoute),
        PaginationModule.forRoot(),
        ModalModule,
        TabsModule
    ],
    declarations:[
        UserManagementComponent,
        UserManagementDialogComponent,
        UserManagementResetPasswordComponent
    ],
    providers:[
        UserManagementServices
    ],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class UserManagementModule{}
