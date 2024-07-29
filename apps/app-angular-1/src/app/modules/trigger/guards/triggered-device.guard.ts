import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { CurrentDeviceIdService } from '../../devices/services/current-device-id.service';
import { TriggeredDeviceIdService } from '../services/triggered-device-id.service';

export const triggeredDeviceGuardFn: CanActivateFn = (
  _route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): boolean => {
  const router: Router = inject(Router);
  const currentDeviceIdService = inject(CurrentDeviceIdService);
  const triggeredDeviceIdService = inject(TriggeredDeviceIdService);

  const currentDeviceId = currentDeviceIdService.getCurrentDeviceId();
  const triggeredDeviceId = triggeredDeviceIdService.getTriggeredDeviceId();
  console.log('currentDeviceId', currentDeviceId());
  console.log('triggeredDeviceId', triggeredDeviceId());
  const accessedRouteUrl = state.url;
  if (
    !triggeredDeviceId() ||
    triggeredDeviceId() !== currentDeviceId() ||
    accessedRouteUrl !== '/triggered'
  ) {
    void router.navigate(['idle']);
    return false;
  }

  return true;
};
