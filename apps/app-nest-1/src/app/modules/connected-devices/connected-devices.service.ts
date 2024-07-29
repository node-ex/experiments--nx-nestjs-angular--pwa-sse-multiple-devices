import type { ConnectedDevice } from '@nestjs-angular-nx--template--basic/lib-js-1';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ConnectedDevicesService {
  private connectedDevices: ConnectedDevice[] = [];

  getConnectedDevices(): ConnectedDevice[] {
    return this.connectedDevices;
  }

  getConnectedDevice(id: string): ConnectedDevice {
    const connectedDevice = this.connectedDevices.find(
      (device) => device.id === id,
    );
    if (!connectedDevice) {
      throw new NotFoundException(`Device with ID ${id} is not connected`);
    }

    return connectedDevice;
  }

  connectNewDevice(id: string): void {
    this.connectedDevices.push({ id });
  }

  disconnectConnectedDevice(id: string): void {
    // Throw if device does not exist
    this.getConnectedDevice(id);
    this.connectedDevices = this.connectedDevices.filter(
      (device) => device.id !== id,
    );
  }
}
