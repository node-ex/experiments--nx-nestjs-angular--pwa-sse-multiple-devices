import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-connected-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-connected-view.component.html',
  styleUrl: './not-connected-view.component.scss',
})
export class NotConnectedViewComponent {}
