import { Route } from '@angular/router';

import { LeftsidebarComponent } from './leftsidebar.component';

export const leftsidebarRoute: Route = {
    path: '',
    component: LeftsidebarComponent,
    outlet: 'leftsidebar'
};