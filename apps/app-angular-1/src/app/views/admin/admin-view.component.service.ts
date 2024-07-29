import { inject, Injectable, signal } from '@angular/core';
import { DevicesApiService } from '../../modules/devices/devices.api.service';
import { Device } from '@nestjs-angular-nx--template--basic/lib-js-1';

@Injectable()
export class AdminViewComponentService {
  devicesApiService = inject(DevicesApiService);

  devices = signal<Device[]>([]);

  constructor() {
    this.getDevices();
  }

  getDevices() {
    this.devicesApiService.getDevices().subscribe((devices) => {
      this.devices.set(devices);
    });
  }

  createDevice(device: Device) {
    this.devicesApiService.createDevice(device).subscribe(() => {
      this.getDevices();
    });
  }

  deleteDevice(id: string) {
    this.devicesApiService.deleteDevice(id).subscribe(() => {
      this.getDevices();
    });
  }

  trackById(index: number, device: Device) {
    return device.id;
  }
}
