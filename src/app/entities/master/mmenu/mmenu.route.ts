import { Routes } from "@angular/router";
import { MmenuComponent } from "./mmenu.component";
import { AuthGuard } from "../../../shared";
import { MmenuDialogComponent } from "./mmenu-dialog.component";

export const mmenuRoutes:Routes = [
    {
        path:'mmenu',
        component:MmenuComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'mmenu-new',
        component:MmenuDialogComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'mmenu/:id/edit',
        component:MmenuDialogComponent,
        canActivate:[AuthGuard]
    }
]