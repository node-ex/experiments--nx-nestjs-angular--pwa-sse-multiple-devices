import { TriggerConnectedDeviceRequestDto } from '@nestjs-angular-nx--template--basic/lib-js-1';
import { Body, Controller, Post, Query, Sse } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';

type MessageEventWithMessage = MessageEvent<{ message: string }>;

@Controller('trigger')
export class TriggerController {
  private deviceSubjectMap = new Map<
    string,
    Subject<MessageEventWithMessage>
  >();

  @Sse('sse')
  // Must return an Observable stream
  initializeSse(
    @Query('deviceId') deviceId: string,
  ): Observable<MessageEventWithMessage> {
    console.log(`Client with device ID ${deviceId} connected`);

    if (!this.deviceSubjectMap.has(deviceId)) {
      this.deviceSubjectMap.set(deviceId, new Subject());
    }

    return this.deviceSubjectMap.get(deviceId)!.asObservable();
  }

  @Post('')
  triggerDevice(
    @Body() triggerConnectedDeviceRequestDto: TriggerConnectedDeviceRequestDto,
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
}
