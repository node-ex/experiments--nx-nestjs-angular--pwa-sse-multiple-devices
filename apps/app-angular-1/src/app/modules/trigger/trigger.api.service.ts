import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TriggerConnectedDeviceRequestDto } from '@nestjs-angular-nx--template--basic/lib-js-1';
import { Observable } from 'rxjs';

@Injectable()
export class TriggerApiService {
  http = inject(HttpClient);

  triggerConnectedDevice(id: string): Observable<null> {
    return this.http.post<null>('/api/trigger', {
      id,
    } as TriggerConnectedDeviceRequestDto);
  }
}
