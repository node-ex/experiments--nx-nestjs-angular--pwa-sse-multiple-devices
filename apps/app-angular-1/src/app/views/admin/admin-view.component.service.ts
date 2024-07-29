import { inject, Injectable, signal } from '@angular/core';
import { ConnectedDevicesApiService } from '../../modules/devices/services/connected-devices.api.service';
import { ConnectedDevice } from '@nestjs-angular-nx--template--basic/lib-js-1';
import { TriggerApiService } from '../../modules/trigger/services/trigger.api.service';

@Injectable()
export class AdminViewComponentService {
  connectedDevices = signal<ConnectedDevice[]>([]);

  private connectedDevicesApiService = inject(ConnectedDevicesApiService);
  private triggerApiService = inject(TriggerApiService);

  constructor() {
    this.getConnectedDevices();
  }

  getConnectedDevices() {
    this.connectedDevicesApiService.getConnectedDevices().subscribe({
      next: (devices) => {
        this.connectedDevices.set(devices);
      },
    });
  }

  triggerConnectedDevice(id: string) {
    this.triggerApiService.triggerConnectedDevice(id).subscribe({
      next: () => {
        this.getConnectedDevices();
      },
    });
  }

  disconnectConnectedDevice(id: string) {
    this.connectedDevicesApiService
      .disconnectConnectedDevice({ id })
      .subscribe({
        next: () => {
          this.getConnectedDevices();
        },
      });
  }

  trackById(_index: number, device: ConnectedDevice) {
    return device.id;
  }
}
