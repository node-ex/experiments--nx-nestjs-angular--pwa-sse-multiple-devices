import { TriggerConnectedDeviceRequestDto } from '@nestjs-angular-nx--template--basic/lib-js-1';
import { Body, Controller, Post, Query, Sse } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MessageEventWithMessage } from './types/message-event-with-message.type';
import { TriggerService } from './trigger.service';

@Controller('trigger')
export class TriggerController {
  constructor(private triggerService: TriggerService) {}

  @Sse('sse')
  // Must return an Observable stream
  initializeSse(
    @Query('deviceId') deviceId: string,
  ): Observable<MessageEventWithMessage> {
    return this.triggerService.initializeSse(deviceId);
  }

  @Post('')
  triggerDevice(
    @Body() triggerConnectedDeviceRequestDto: TriggerConnectedDeviceRequestDto,
  ) {
    return this.triggerService.triggerDevice(triggerConnectedDeviceRequestDto);
  }
}
