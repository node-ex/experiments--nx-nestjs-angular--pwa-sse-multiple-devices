import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TriggeredViewComponentService } from './triggered-view.component.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-triggered-view',
  templateUrl: './triggered-view.component.html',
  styleUrl: './triggered-view.component.scss',
  imports: [CommonModule, RouterModule],
  providers: [TriggeredViewComponentService],
})
export class TriggeredViewComponent {
  service = inject(TriggeredViewComponentService);
}
