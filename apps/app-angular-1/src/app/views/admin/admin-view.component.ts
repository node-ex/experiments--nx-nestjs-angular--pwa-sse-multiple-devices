import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AdminViewComponentService } from './admin-view.component.service';
import { TriggerApiService } from '../../modules/trigger/trigger.api.service';

@Component({
  standalone: true,
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.scss',
  imports: [CommonModule],
  providers: [AdminViewComponentService, TriggerApiService],
})
export class AdminViewComponent {
  service = inject(AdminViewComponentService);
}
