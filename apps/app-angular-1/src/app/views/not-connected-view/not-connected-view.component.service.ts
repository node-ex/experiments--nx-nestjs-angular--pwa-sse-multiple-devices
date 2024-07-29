import { inject, Injectable, signal } from '@angular/core';
import { faker } from '@faker-js/faker';
import { ConnectedDevicesApiService } from '../../modules/devices/connected-devices.api.service';
import { CurrentDeviceIdService } from '../../modules/devices/current-device-id.service';
import { Router } from '@angular/router';

@Injectable()
export class NotConnectedViewComponentService {
  public newDeviceId = signal<string>('');

  private connectedDevicesApiService = inject(ConnectedDevicesApiService);
  private currentDeviceIdService = inject(CurrentDeviceIdService);
  private router = inject(Router);

  public constructor() {
    this.newDeviceId.set(this.getRandomDeviceId());
  }

  public connectNewDevice(): void {
    this.connectedDevicesApiService
      .connectNewDevice({ id: this.newDeviceId() })
      .subscribe({
        complete: () => {
          this.currentDeviceIdService.setCurrentDeviceId(this.newDeviceId());
          void this.router.navigate(['idle']);
        },
      });
  }

  private getRandomDeviceId(): string {
    return `${faker.airline.airline().iataCode}${faker.airline.flightNumber({
      addLeadingZeros: true,
    })}`; // 'AA0798'
  }
}
