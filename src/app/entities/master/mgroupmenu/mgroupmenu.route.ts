import { Routes } from "@angular/router";
import { MgroupmenuComponent } from "./mgroupmenu.component";
import { AuthGuard } from "../../../shared";
import { MgroupmenuDialogComponent } from "./mgroupmenu-dialog.component";

export const mgroupmenuRoute: Routes = [
    {
        path: 'mgroupmenu',
        component: MgroupmenuComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'mgroupmenu-new',
        component: MgroupmenuDialogComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'mgroupmenu/:id/edit',
        component: MgroupmenuDialogComponent,
        canActivate:[AuthGuard]
    }
]