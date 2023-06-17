import { Module } from '@nestjs/common';
import { HookahService } from './service/hookah.service';
import { HookahResolver } from './resolve/hookah.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [HookahResolver, HookahService],
})
export class HookahModule {}
