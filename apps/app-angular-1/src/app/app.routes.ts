import { Route } from '@angular/router';
import { NotConnectedViewComponent } from './views/not-connected-view/not-connected-view.component';
import { AdminViewComponent } from './views/admin/admin-view.component';
import { IdleViewComponent } from './views/idle-view/idle-view.component';
import { TriggeredViewComponent } from './views/triggered/triggered-view.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NotConnectedViewComponent,
  },
  {
    path: 'admin',
    component: AdminViewComponent,
  },
  {
    path: 'idle',
    component: IdleViewComponent,
  },
  {
    path: 'triggered',
    component: TriggeredViewComponent,
  },
];
