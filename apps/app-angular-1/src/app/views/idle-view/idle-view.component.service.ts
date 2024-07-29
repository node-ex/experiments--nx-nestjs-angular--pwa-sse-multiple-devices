import { effect, inject, Injectable, untracked } from '@angular/core';
import { CurrentDeviceIdService } from '../../modules/devices/services/current-device-id.service';
import { ConnectedDevicesApiService } from '../../modules/devices/services/connected-devices.api.service';
import { Router } from '@angular/router';
import { TriggerSseEventSourceService } from '../../modules/trigger/services/trigger-sse-event-source.service';
import { TriggeredDeviceIdService } from '../../modules/trigger/services/triggered-device-id.service';

@Injectable()
export class IdleViewComponentService {
  private currentDeviceIdService = inject(CurrentDeviceIdService);
  private connectedDevicesApiService = inject(ConnectedDevicesApiService);
  private triggerSseEventSourceService = inject(TriggerSseEventSourceService);
  private triggeredDeviceIdService = inject(TriggeredDeviceIdService);
  private router = inject(Router);

  public constructor() {
    effect(
      () => {
        const currentDeviceId =
          this.currentDeviceIdService.getCurrentDeviceId();
        const triggerCount = this.triggerSseEventSourceService.triggerCount();
        if (triggerCount > 0) {
          this.triggeredDeviceIdService.setTriggeredDeviceId(
            untracked(currentDeviceId)!,
          );
          void this.router.navigate(['triggered']);
        }
      },
      { allowSignalWrites: true },
    );
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
