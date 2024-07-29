import { effect, inject, Injectable } from '@angular/core';
import { CurrentDeviceIdService } from '../../modules/devices/current-device-id.service';
import { ConnectedDevicesApiService } from '../../modules/devices/connected-devices.api.service';
import { Router } from '@angular/router';
import { TriggerSseEventSourceService } from '../../modules/trigger/trigger-sse-event-source.service';

@Injectable()
export class IdleViewComponentService {
  private currentDeviceIdService = inject(CurrentDeviceIdService);
  private connectedDevicesApiService = inject(ConnectedDevicesApiService);
  private triggerSseEventSourceService = inject(TriggerSseEventSourceService);
  private router = inject(Router);

  public constructor() {
    effect(() => {
      const triggerCount = this.triggerSseEventSourceService.triggerCount();
      if (triggerCount > 0) {
        void this.router.navigate(['triggered']);
      }
    });
  }

  public disconnectCurrentDevice(): void {
    const currentDeviceId = this.currentDeviceIdService.getCurrentDeviceId();
    this.connectedDevicesApiService
      .disconnectConnectedDevice({ id: currentDeviceId()! })
      .subscribe({
        complete: () => {
          this.currentDeviceIdService.resetCurrentDeviceId();
          void this.router.navigate(['']);
        },
      });
  }
}
