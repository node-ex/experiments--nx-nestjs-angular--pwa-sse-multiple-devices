import { Route } from '@angular/router';
import { NotConnectedViewComponent } from './views/not-connected-view/not-connected-view.component';
import { AdminViewComponent } from './views/admin/admin-view.component';
import { IdleViewComponent } from './views/idle-view/idle-view.component';
import { TriggeredViewComponent } from './views/triggered/triggered-view.component';
import { connectedDeviceGuardFn } from './modules/devices/guards/connected-device.guard';
import { triggeredDeviceGuardFn } from './modules/trigger/guards/triggered-device.guard';
import { notConnectedDeviceGuardFn } from './modules/devices/guards/not-connected-device.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NotConnectedViewComponent,
    canActivate: [notConnectedDeviceGuardFn],
  },
  {
    path: 'admin',
    component: AdminViewComponent,
  },
  {
    path: 'idle',
    component: IdleViewComponent,
    canActivate: [connectedDeviceGuardFn],
  },
  {
    path: 'triggered',
    component: TriggeredViewComponent,
    canActivate: [connectedDeviceGuardFn, triggeredDeviceGuardFn],
  },
];
