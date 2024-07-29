import { Injectable, Signal, signal } from '@angular/core';

const TRIGGERED_DEVICE_ID_KEY = 'triggeredDeviceId';

@Injectable({
  providedIn: 'root',
})
export class TriggeredDeviceIdService {
  private triggeredDeviceId = signal<string | null>(null);

  getTriggeredDeviceId(): Signal<string | null> {
    if (!this.triggeredDeviceId()) {
      this.triggeredDeviceId.set(localStorage.getItem(TRIGGERED_DEVICE_ID_KEY));
    }

    return this.triggeredDeviceId;
  }

  setTriggeredDeviceId(deviceId: string): void {
    this.triggeredDeviceId.set(deviceId);
    localStorage.setItem(TRIGGERED_DEVICE_ID_KEY, deviceId);
  }

  resetTriggeredDeviceId(): void {
    this.triggeredDeviceId.set(null);
    localStorage.removeItem(TRIGGERED_DEVICE_ID_KEY);
  }
}
