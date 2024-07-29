import { inject, Injectable, signal } from '@angular/core';
import { faker } from '@faker-js/faker';
import { ConnectedDevicesApiService } from '../../modules/devices/connected-devices.api.service';
import { CurrentDeviceIdService } from '../../modules/devices/current-device-id.service';

@Injectable()
export class NotConnectedViewComponentService {
  public newDeviceId = signal<string>('');

  private connectedDevicesApiService = inject(ConnectedDevicesApiService);
  private currentDeviceIdService = inject(CurrentDeviceIdService);

  public constructor() {
    this.newDeviceId.set(this.getRandomDeviceId());
  }

  public connectNewDevice(): void {
    this.connectedDevicesApiService
      .connectNewDevice({ id: this.newDeviceId() })
      .subscribe();
    this.currentDeviceIdService.setCurrentDeviceId(this.newDeviceId());
  }

  private getRandomDeviceId(): string {
    return `${faker.airline.airline().iataCode}${faker.airline.flightNumber({
      addLeadingZeros: true,
    })}`; // 'AA0798'
  }
}
