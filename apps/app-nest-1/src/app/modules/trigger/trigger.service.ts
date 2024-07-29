import { Injectable } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { MessageEventWithMessage } from './types/message-event-with-message.type';
import { TriggerConnectedDeviceRequestDto } from '@nestjs-angular-nx--template--basic/lib-js-1';

@Injectable()
export class TriggerService {
  private deviceSubjectMap = new Map<
    string,
    Subject<MessageEventWithMessage>
  >();

  initializeSse(deviceId: string): Observable<MessageEventWithMessage> {
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
    this.deviceSubjectMap
      .get(triggerConnectedDeviceRequestDto.id)!
      .next(new MessageEvent('message', { data: { message: 'trigger' } }));

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
