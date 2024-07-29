import { Module } from '@nestjs/common';
import { TriggerController } from './trigger.controller';
import { TriggerService } from './trigger.service';

@Module({
  controllers: [TriggerController],
  providers: [TriggerService],
})
export class TriggerModule {}
