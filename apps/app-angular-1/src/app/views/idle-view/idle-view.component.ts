import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IdleViewComponentService } from './idle-view.component.service';
import { CurrentDeviceIdService } from '../../modules/devices/services/current-device-id.service';
import { TriggerSseEventSourceService } from '../../modules/trigger/services/trigger-sse-event-source.service';

@Component({
  standalone: true,
  selector: 'app-idle-view',
  templateUrl: './idle-view.component.html',
  styleUrl: './idle-view.component.scss',
  imports: [CommonModule],
  providers: [
    IdleViewComponentService,
    {
      provide: TriggerSseEventSourceService,
      useFactory: (currentDeviceIdService: CurrentDeviceIdService) => {
        const currentDeviceId = currentDeviceIdService.getCurrentDeviceId();
        return TriggerSseEventSourceService.create(currentDeviceId()!);
      },
      deps: [CurrentDeviceIdService],
    },
  ],
})
export class IdleViewComponent {
  service = inject(IdleViewComponentService);
}
