import { Routes } from "@angular/router";
import { AuthGuard } from "../../../shared";

import { MheadermenuComponent } from "./mheadermenu.component";
import { MheadermenuDialogComponent } from "./mheadermenu-dialog.component";


export const mheadermenuRoute: Routes = [
    {
        path: 'mheadermenu',
        component: MheadermenuComponent,
        canActivate:[AuthGuard]
    },{
        path: 'mheadermenu-new',
        component: MheadermenuDialogComponent,
        canActivate:[AuthGuard]
    },{
        path: 'mheadermenu/:id/edit',
        component: MheadermenuDialogComponent,
        canActivate:[AuthGuard]
    }
]