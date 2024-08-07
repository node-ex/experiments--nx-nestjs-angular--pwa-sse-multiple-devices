import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponentService } from './app.component.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterModule],
  providers: [AppComponentService],
})
export class AppComponent {
  service = inject(AppComponentService);
}
