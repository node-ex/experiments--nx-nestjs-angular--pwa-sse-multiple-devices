import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IdleViewComponentService } from './idle-view.component.service';
import { CurrentDeviceIdService } from '../../modules/devices/current-device-id.service';
import { ConnectedDevicesApiService } from '../../modules/devices/connected-devices.api.service';

@Component({
  standalone: true,
  selector: 'app-idle-view',
  templateUrl: './idle-view.component.html',
  styleUrl: './idle-view.component.scss',
  imports: [CommonModule],
  providers: [
    IdleViewComponentService,
    CurrentDeviceIdService,
    ConnectedDevicesApiService,
  ],
})
export class IdleViewComponent {
  service = inject(IdleViewComponentService);
}
