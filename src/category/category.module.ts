import { Module } from '@nestjs/common';
import { CategoryService } from './service/category.service';
import { CategoryResolver } from './resolver/category.resolver';

@Module({
  providers: [CategoryResolver, CategoryService],
})
export class CategoryModule {}
