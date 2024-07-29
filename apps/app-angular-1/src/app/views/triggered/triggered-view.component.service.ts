import { effect, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TriggeredDeviceIdService } from '../../modules/trigger/services/triggered-device-id.service';

@Injectable()
export class TriggeredViewComponentService {
  private triggeredDeviceIdService = inject(TriggeredDeviceIdService);
  private router = inject(Router);

  private setTimeoutHandle: number | null = null;

  constructor() {
    effect(
      (onCleanup) => {
        this.setTimeoutHandle = window.setTimeout(() => {
          this.redirect();
        }, 5000);

        onCleanup(() => {
          this.triggeredDeviceIdService.resetTriggeredDeviceId();

          if (this.setTimeoutHandle) {
            clearTimeout(this.setTimeoutHandle);
          }
        });
      },
      { allowSignalWrites: true },
    );
  }

  redirect() {
    void this.router.navigate(['idle']);
  }
}
