import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NotConnectedViewComponentService } from './not-connected-view.component.service';
import { DevicesApiService } from '../../modules/devices/devices.api.service';
import { CurrentDeviceIdService } from '../../modules/devices/current-device-id.service';

@Component({
  standalone: true,
  selector: 'app-not-connected-view',
  templateUrl: './not-connected-view.component.html',
  styleUrl: './not-connected-view.component.scss',
  imports: [CommonModule],
  providers: [
    NotConnectedViewComponentService,
    DevicesApiService,
    CurrentDeviceIdService,
  ],
})
export class NotConnectedViewComponent {
  service = inject(NotConnectedViewComponentService);
}
