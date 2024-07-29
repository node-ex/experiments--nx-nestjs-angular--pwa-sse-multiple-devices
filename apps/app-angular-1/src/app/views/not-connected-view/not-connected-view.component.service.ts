import { inject, Injectable, signal } from '@angular/core';
import { faker } from '@faker-js/faker';
import { DevicesApiService } from '../../modules/devices/devices.api.service';
import { CurrentDeviceIdService } from '../../modules/devices/current-device-id.service';

@Injectable()
export class NotConnectedViewComponentService {
  public currentDeviceIdService = inject(CurrentDeviceIdService);

  public newDeviceId = signal<string>('');

  private devicesApiService = inject(DevicesApiService);

  public constructor() {
    this.newDeviceId.set(this.getRandomDeviceId());
  }

  public createDevice(): void {
    this.devicesApiService.createDevice({ id: this.newDeviceId() }).subscribe();
    this.currentDeviceIdService.setCurrentDeviceId(this.newDeviceId());
  }

  private getRandomDeviceId(): string {
    return `${faker.airline.airline().iataCode}${faker.airline.flightNumber({
      addLeadingZeros: true,
    })}`; // 'AA0798'
  }
}
