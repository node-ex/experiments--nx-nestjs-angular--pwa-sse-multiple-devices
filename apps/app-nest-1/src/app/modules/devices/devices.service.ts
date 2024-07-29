import type { Device } from '@nestjs-angular-nx--template--basic/lib-js-1';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class DevicesService {
  private devices: Device[] = [];

  getDevices(): Device[] {
    return this.devices;
  }

  getDevice(id: string): Device {
    const device = this.devices.find((device) => device.id === id);
    if (!device) {
      throw new NotFoundException(`Device with id ${id} not found`);
    }

    return device;
  }

  createDevice(id: string): void {
    this.devices.push({ id });
  }

  deleteDevice(id: string): void {
    // Throw if device does not exist
    this.getDevice(id);
    this.devices = this.devices.filter((device) => device.id !== id);
  }
}
