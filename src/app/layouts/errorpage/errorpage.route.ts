import { Route } from '@angular/router';

import { ErrorpageComponent } from './errorpage.component';

export const errorpageRoute: Route = {
    path: 'errorpage',
    component: ErrorpageComponent,
    outlet: 'errorpage'
};