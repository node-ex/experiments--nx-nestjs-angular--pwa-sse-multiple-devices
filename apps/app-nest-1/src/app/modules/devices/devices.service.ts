import { Injectable, NotFoundException } from '@nestjs/common';
import { Device } from './types/device.interface';

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
    this.devices = this.devices.filter((device) => device.id !== id);
  }
}
