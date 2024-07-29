import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  ConnectedDeviceResponseDto,
  ConnectNewDeviceRequestDto,
  DisconnectConnectedDeviceRequestDto,
} from '@nestjs-angular-nx--template--basic/lib-js-1';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectedDevicesApiService {
  http = inject(HttpClient);

  getConnectedDevices(): Observable<ConnectedDeviceResponseDto[]> {
    return this.http.get<ConnectedDeviceResponseDto[]>(
      '/api/connected-devices',
    );
  }

  getConnectedDevice(id: string): Observable<ConnectedDeviceResponseDto> {
    return this.http.get<ConnectedDeviceResponseDto>(
      `/api/connected-devices/${id}`,
    );
  }

  connectNewDevice(newDevice: ConnectNewDeviceRequestDto): Observable<null> {
    return this.http.post<null>('/api/connected-devices', newDevice);
  }

  disconnectConnectedDevice(
    connectedDevice: DisconnectConnectedDeviceRequestDto,
  ): Observable<null> {
    return this.http.delete<null>('/api/connected-devices', {
      body: connectedDevice,
    });
  }
}
