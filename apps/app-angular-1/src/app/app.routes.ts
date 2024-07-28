import { Route } from '@angular/router';
import { NotConnectedViewComponent } from './views/not-connected-view/not-connected-view.component';
import { AdminViewComponent } from './views/admin/admin-view.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NotConnectedViewComponent,
  },
  {
    path: 'admin',
    component: AdminViewComponent,
  },
];
