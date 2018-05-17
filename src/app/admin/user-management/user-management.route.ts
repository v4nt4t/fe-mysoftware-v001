import { Routes } from "@angular/router";
import { AuthGuard } from "../../shared";
import { UserManagementComponent } from "./user-management.component";
import { UserManagementDialogComponent } from "./user-management-dialog.component";

export const userManagementRoute: Routes = [
    {
        path: 'user-management',
        component: UserManagementComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'user-management-new',
        component: UserManagementDialogComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'user-management/:id/edit',
        component: UserManagementDialogComponent,
        canActivate:[AuthGuard]
    }
]