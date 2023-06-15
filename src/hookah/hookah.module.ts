import { Module } from '@nestjs/common';
import { HookahService } from './service/hookah.service';
import { HookahResolver } from './hookah.resolver';

@Module({
  providers: [HookahResolver, HookahService],
})
export class HookahModule {}
