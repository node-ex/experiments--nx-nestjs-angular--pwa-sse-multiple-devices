import { Route } from '@angular/router';
import { NotConnectedViewComponent } from './views/not-connected-view/not-connected-view.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NotConnectedViewComponent,
  },
];
