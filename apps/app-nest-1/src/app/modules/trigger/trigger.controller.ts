import { TriggerConnectedDeviceRequestDto } from '@nestjs-angular-nx--template--basic/lib-js-1';
import {
  Body,
  Controller,
  MessageEvent,
  Post,
  Query,
  Sse,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { TriggerService } from './trigger.service';

@Controller('trigger')
export class TriggerController {
  constructor(private triggerService: TriggerService) {}

  @Sse('sse')
  // Must return an Observable stream
  initializeSse(@Query('deviceId') deviceId: string): Observable<MessageEvent> {
    return this.triggerService.initializeSse(deviceId);
  }

  @Post('')
  triggerDevice(
    @Body() triggerConnectedDeviceRequestDto: TriggerConnectedDeviceRequestDto,
  ) {
    return this.triggerService.triggerDevice(triggerConnectedDeviceRequestDto);
  }
}
