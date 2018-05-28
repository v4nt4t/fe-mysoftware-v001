import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedLibModule } from "../../shared/shared-lib.module";
import { SharedModule } from "../../shared/shared.module";
import { PaginationModule, ModalModule, TabsModule } from "ngx-bootstrap";
import { userManagementMenuRoute } from "./user-management-menu.route";
import { UserManagementMenuDialogComponent } from "./user-management-menu-dialog.component";
import { UserManagementMenuComponent } from "./user-management-menu.component";
import { UserManagementMenuServices } from "./user-management-menu.service";


@NgModule({
    imports:[
        SharedLibModule,
        SharedModule,
        RouterModule.forChild(userManagementMenuRoute),
        PaginationModule.forRoot(),
        ModalModule,
        TabsModule
    ],
    declarations:[
        UserManagementMenuDialogComponent,
        UserManagementMenuComponent
    ],
    providers:[
        UserManagementMenuServices
    ],
    exports:[
        UserManagementMenuComponent
    ],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class UserManagementMenuModule{}
