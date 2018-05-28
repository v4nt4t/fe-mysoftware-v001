import { Routes } from "@angular/router";
import { AuthGuard } from "../../shared";
import { UserManagementMenuComponent } from "./user-management-menu.component";
import { UserManagementMenuDialogComponent } from "./user-management-menu-dialog.component";

export const userManagementMenuRoute: Routes = [
    {
        path: 'user-management-menu',
        component: UserManagementMenuComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'user-management-menu/:muserid/new',
        component: UserManagementMenuDialogComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'user-management-menu/:id/edit',
        component: UserManagementMenuDialogComponent,
        canActivate:[AuthGuard]
    }
]