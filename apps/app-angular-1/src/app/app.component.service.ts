import { inject, Injectable } from '@angular/core';
import { TriggeredDeviceIdService } from './modules/trigger/services/triggered-device-id.service';

@Injectable()
export class AppComponentService {
  triggeredDeviceIdService = inject(TriggeredDeviceIdService);

  constructor() {
    this.onApplicationInitialization();
  }

  private onApplicationInitialization() {
    this.triggeredDeviceIdService.resetTriggeredDeviceId();
  }
}
