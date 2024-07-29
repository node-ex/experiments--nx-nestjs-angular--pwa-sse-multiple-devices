import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { CurrentDeviceIdService } from '../services/current-device-id.service';

export const connectedDeviceGuardFn: CanActivateFn = (
  _route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): boolean => {
  const router: Router = inject(Router);
  const currentDeviceIdService = inject(CurrentDeviceIdService);

  const currentDeviceId = currentDeviceIdService.getCurrentDeviceId();
  const accessedRouteUrl = state.url;
  if (!currentDeviceId() && accessedRouteUrl !== '/') {
    void router.navigate(['']);
    return false;
  }

  return true;
};
