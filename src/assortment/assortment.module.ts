import { Module } from '@nestjs/common';
import { AssortmentService } from './assortment.service';
import { AssortmentResolver } from './assortment.resolver';

@Module({
  providers: [AssortmentResolver, AssortmentService]
})
export class AssortmentModule {}
