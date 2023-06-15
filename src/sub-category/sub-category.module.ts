import { Module } from '@nestjs/common';
import { SubCategoryService } from './service/sub-category.service';
import { SubCategoryResolver } from './resolver/sub-category.resolver';

@Module({
  providers: [SubCategoryResolver, SubCategoryService],
})
export class SubCategoryModule {}
