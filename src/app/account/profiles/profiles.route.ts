import { Route } from '@angular/router';

import { ProfilesComponent } from './profiles.component';
import { AuthGuard } from '../../shared';

export const profilesRoute: Route = {
    path: 'profiles',
    component: ProfilesComponent,
    canActivate:[AuthGuard]
};