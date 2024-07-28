import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { DevicesService } from './devices.service';
import { Device } from './types/device.interface';

@Controller('devices')
export class DevicesController {
  constructor(private devicesService: DevicesService) {}

  @Get()
  getDevices(): Device[] {
    return this.devicesService.getDevices();
  }

  @Get(':id')
  getDevice(@Param('id') id: string): Device {
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
