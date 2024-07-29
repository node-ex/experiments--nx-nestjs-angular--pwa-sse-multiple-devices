import { Injectable, Signal, signal } from '@angular/core';

const CURRENT_DEVICE_ID_KEY = 'currentDeviceId';

@Injectable({
  providedIn: 'root',
})
export class CurrentDeviceIdService {
  private currentDeviceId = signal<string | null>(null);

  getCurrentDeviceId(): Signal<string | null> {
    if (!this.currentDeviceId()) {
      this.currentDeviceId.set(localStorage.getItem(CURRENT_DEVICE_ID_KEY));
    }

    return this.currentDeviceId;
  }

  setCurrentDeviceId(deviceId: string): void {
    this.currentDeviceId.set(deviceId);
    localStorage.setItem(CURRENT_DEVICE_ID_KEY, deviceId);
  }

  resetCurrentDeviceId(): void {
    this.currentDeviceId.set(null);
    localStorage.removeItem(CURRENT_DEVICE_ID_KEY);
  }
}
