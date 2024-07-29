import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ConnectedDevicesService } from './connected-devices.service';
import {
  ConnectedDeviceResponseDto,
  ConnectNewDeviceRequestDto,
  DisconnectConnectedDeviceRequestDto,
} from '@nestjs-angular-nx--template--basic/lib-js-1';
import { TriggerService } from '../trigger/trigger.service';

@Controller('connected-devices')
export class ConnectedDevicesController {
  constructor(
    private connectedDevicesService: ConnectedDevicesService,
    private triggerService: TriggerService,
  ) {}

  @Get()
  getConnectedDevices(): ConnectedDeviceResponseDto[] {
    return this.connectedDevicesService.getConnectedDevices();
  }

  @Get(':id')
  getConnectedDevice(@Param('id') id: string): ConnectedDeviceResponseDto {
    return this.connectedDevicesService.getConnectedDevice(id);
  }

  @Post()
  connectNewDevice(@Body() body: ConnectNewDeviceRequestDto) {
    this.connectedDevicesService.connectNewDevice(body.id);
  }

  @Delete()
  disconnectConnectedDevice(@Body() body: DisconnectConnectedDeviceRequestDto) {
    this.connectedDevicesService.disconnectConnectedDevice(body.id);
    this.triggerService.disconnectDevice(body.id);
  }
}
