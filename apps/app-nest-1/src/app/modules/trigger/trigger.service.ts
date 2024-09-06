import { Injectable, MessageEvent } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { TriggerConnectedDeviceRequestDto } from '@nestjs-angular-nx--template--basic/lib-js-1';

@Injectable()
export class TriggerService {
  private deviceSubjectMap = new Map<string, Subject<MessageEvent>>();

  initializeSse(deviceId: string): Observable<MessageEvent> {
    console.log(`Client with device ID ${deviceId} connected`);

    if (!this.deviceSubjectMap.has(deviceId)) {
      this.deviceSubjectMap.set(deviceId, new Subject());
    }

    return this.deviceSubjectMap.get(deviceId)!.asObservable();
  }

  triggerDevice(
    triggerConnectedDeviceRequestDto: TriggerConnectedDeviceRequestDto,
  ) {
    if (!this.deviceSubjectMap.has(triggerConnectedDeviceRequestDto.id)) {
      return {
        message: `Device ${triggerConnectedDeviceRequestDto.id} not found`,
      };
    }

    console.log(
      `Received trigger for device ID ${triggerConnectedDeviceRequestDto.id}`,
    );
    this.deviceSubjectMap.get(triggerConnectedDeviceRequestDto.id)!.next({
      type: 'message',
      data: { message: 'trigger' },
    } as MessageEvent);

    return {
      message: `Device ${triggerConnectedDeviceRequestDto.id} triggered`,
    };
  }

  disconnectDevice(deviceId: string) {
    if (!this.deviceSubjectMap.has(deviceId)) {
      return;
    }

    this.deviceSubjectMap.get(deviceId)!.complete();
    this.deviceSubjectMap.delete(deviceId);

    console.log(`Client with device ID ${deviceId} disconnected`);
  }
}
