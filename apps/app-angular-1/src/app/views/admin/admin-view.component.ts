import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminViewComponentService } from './admin-view.component.service';

@Component({
  standalone: true,
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.scss',
  imports: [CommonModule],
  providers: [AdminViewComponentService],
})
export class AdminViewComponent {
  constructor(public service: AdminViewComponentService) {}
}
