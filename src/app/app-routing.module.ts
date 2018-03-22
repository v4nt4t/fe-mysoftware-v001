import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { navbarRoute, footerRoute, leftsidebarRoute, errorpageRoute } from './layouts';

const LAYOUT_ROUTES = [
    navbarRoute,
    footerRoute,
    leftsidebarRoute,
    errorpageRoute
];

@NgModule({
    imports:[
        RouterModule.forRoot(LAYOUT_ROUTES, {useHash: true})
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {}