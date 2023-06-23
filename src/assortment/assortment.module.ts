import { Module } from '@nestjs/common';
import { AssortmentService } from './service/assortment.service';
import { AssortmentResolver } from './resolver/assortment.resolver';

@Module({
  providers: [AssortmentResolver, AssortmentService],
})
export class AssortmentModule {}
