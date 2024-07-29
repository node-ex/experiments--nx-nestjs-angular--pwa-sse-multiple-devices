import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class TriggeredViewComponentService {
  private router = inject(Router);

  private setTimeoutHandle: number | null = null;

  constructor() {
    this.setTimeoutHandle = window.setTimeout(() => {
      this.redirect();
    }, 5000);
  }

  redirect() {
    if (this.setTimeoutHandle) {
      clearTimeout(this.setTimeoutHandle);
    }

    void this.router.navigate(['idle']);
  }
}
