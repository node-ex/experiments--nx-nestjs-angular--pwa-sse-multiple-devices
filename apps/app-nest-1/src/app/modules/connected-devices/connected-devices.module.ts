import { Module } from '@nestjs/common';
import { ConnectedDevicesController } from './connected-devices.controller';
import { ConnectedDevicesService } from './connected-devices.service';

@Module({
  controllers: [ConnectedDevicesController],
  providers: [ConnectedDevicesService],
})
export class ConnectedDevicesModule {}
