import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
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
  deviceId = signal<string>('');

  constructor(public service: NotConnectedViewComponentService) {
    this.deviceId.set(this.service.getRandomDeviceId());
  }

  onConnect() {
    console.log('connecting');
  }
}
