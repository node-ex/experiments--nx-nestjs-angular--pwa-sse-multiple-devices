import { Module } from '@nestjs/common';
import { ConnectedDevicesController } from './connected-devices.controller';
import { ConnectedDevicesService } from './connected-devices.service';
import { TriggerModule } from '../trigger/trigger.module';

@Module({
  imports: [TriggerModule],
  controllers: [ConnectedDevicesController],
  providers: [ConnectedDevicesService],
})
export class ConnectedDevicesModule {}
