import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DeviceDto } from '@nestjs-angular-nx--template--basic/lib-js-1';

@Controller('devices')
export class DevicesController {
  constructor(private devicesService: DevicesService) {}

  @Get()
  getDevices(): DeviceDto[] {
    return this.devicesService.getDevices();
  }

  @Get(':id')
  getDevice(@Param('id') id: string): DeviceDto {
    return this.devicesService.getDevice(id);
  }

  @Post()
  createDevice(@Body() body: { id: string }) {
    this.devicesService.createDevice(body.id);
  }

  @Delete()
  deleteDevice(@Body() body: { id: string }) {
    this.devicesService.deleteDevice(body.id);
  }
}
