import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

@Injectable()
export class NotConnectedViewComponentService {
  getRandomDeviceId(): string {
    return `${faker.airline.airline().iataCode}${faker.airline.flightNumber({
      addLeadingZeros: true,
    })}`; // 'AA0798'
  }
}
