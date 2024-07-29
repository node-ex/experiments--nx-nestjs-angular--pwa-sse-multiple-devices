import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DeviceDto } from '@nestjs-angular-nx--template--basic/lib-js-1';
import { Observable } from 'rxjs';

@Injectable()
export class DevicesApiService {
  http = inject(HttpClient);

  getDevices(): Observable<DeviceDto[]> {
    return this.http.get<DeviceDto[]>('/api/devices');
  }

  getDevice(id: string): Observable<DeviceDto> {
    return this.http.get<DeviceDto>(`/api/devices/${id}`);
  }

  createDevice(device: DeviceDto): Observable<null> {
    return this.http.post<null>('/api/devices', device);
  }

  deleteDevice(id: string): Observable<null> {
    return this.http.delete<null>('/api/devices', {
      body: {
        id,
      },
    });
  }
}
