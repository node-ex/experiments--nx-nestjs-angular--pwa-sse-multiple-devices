import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NotConnectedViewComponentService } from './not-connected-view.component.service';
import { ConnectedDevicesApiService } from '../../modules/devices/connected-devices.api.service';
import { CurrentDeviceIdService } from '../../modules/devices/current-device-id.service';

@Component({
  standalone: true,
  selector: 'app-not-connected-view',
  templateUrl: './not-connected-view.component.html',
  styleUrl: './not-connected-view.component.scss',
  imports: [CommonModule],
  providers: [
    NotConnectedViewComponentService,
    ConnectedDevicesApiService,
    CurrentDeviceIdService,
  ],
})
export class NotConnectedViewComponent {
  service = inject(NotConnectedViewComponentService);
}
