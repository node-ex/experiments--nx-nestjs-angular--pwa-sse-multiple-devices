import { inject, Injectable, signal } from '@angular/core';
import { ConnectedDevicesApiService } from '../../modules/devices/connected-devices.api.service';
import { ConnectedDevice } from '@nestjs-angular-nx--template--basic/lib-js-1';

@Injectable()
export class AdminViewComponentService {
  connectedDevicesApiService = inject(ConnectedDevicesApiService);

  connectedDevices = signal<ConnectedDevice[]>([]);

  constructor() {
    this.getConnectedDevices();
  }

  getConnectedDevices() {
    this.connectedDevicesApiService
      .getConnectedDevices()
      .subscribe((devices) => {
        this.connectedDevices.set(devices);
      });
  }

  connectNewDevice(device: ConnectedDevice) {
    this.connectedDevicesApiService.connectNewDevice(device).subscribe(() => {
      this.getConnectedDevices();
    });
  }

  disconnectConnectedDevice(id: string) {
    this.connectedDevicesApiService
      .disconnectConnectedDevice({ id })
      .subscribe(() => {
        this.getConnectedDevices();
      });
  }

  trackById(_index: number, device: ConnectedDevice) {
    return device.id;
  }
}
