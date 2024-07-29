import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AdminViewComponentService } from './admin-view.component.service';
import { DevicesApiService } from '../../modules/devices/devices.api.service';

@Component({
  standalone: true,
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.scss',
  imports: [CommonModule],
  providers: [AdminViewComponentService, DevicesApiService],
})
export class AdminViewComponent {
  service = inject(AdminViewComponentService);
}
