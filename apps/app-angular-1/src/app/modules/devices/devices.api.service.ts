import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DeviceDto } from '@nestjs-angular-nx--template--basic/lib-js-1';
import { Observable, tap } from 'rxjs';

@Injectable()
export class DevicesApiService {
  http = inject(HttpClient);

  getDevices(): Observable<DeviceDto[]> {
    return this.http.get<DeviceDto[]>('/api/devices');
  }

  getDevice(id: string): Observable<DeviceDto> {
    return this.http.get<DeviceDto>(`/api/devices/${id}`);
  }

  createDevice(device: DeviceDto): Observable<undefined> {
    return this.http.post<undefined>('/api/devices', device).pipe(
      tap((val) => {
        console.log('val', val);
      }),
    );
  }

  deleteDevice(id: string): Observable<undefined> {
    return this.http
      .delete<undefined>('/api/devices', {
        body: {
          id,
        },
      })
      .pipe(
        tap((val) => {
          console.log('val', val);
        }),
      );
  }
}
