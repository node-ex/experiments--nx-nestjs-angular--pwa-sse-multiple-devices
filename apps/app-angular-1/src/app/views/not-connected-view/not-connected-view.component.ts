import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NotConnectedViewComponentService } from './not-connected-view.component.service';

@Component({
  standalone: true,
  selector: 'app-not-connected-view',
  templateUrl: './not-connected-view.component.html',
  styleUrl: './not-connected-view.component.scss',
  imports: [CommonModule],
  providers: [NotConnectedViewComponentService],
})
export class NotConnectedViewComponent {
  service = inject(NotConnectedViewComponentService);
}
