import { CommonModule } from '@angular/common';
import { Component, inject, signal, OnInit } from '@angular/core';
import { NotConnectedViewComponentService } from './not-connected-view.component.service';

@Component({
  standalone: true,
  selector: 'app-not-connected-view',
  templateUrl: './not-connected-view.component.html',
  styleUrl: './not-connected-view.component.scss',
  imports: [CommonModule],
  providers: [NotConnectedViewComponentService],
})
export class NotConnectedViewComponent implements OnInit {
  deviceId = signal<string>('');

  service = inject(NotConnectedViewComponentService);

  ngOnInit() {
    this.deviceId.set(this.service.getRandomDeviceId());
  }

  onConnect() {
    console.log('connecting');
  }
}
