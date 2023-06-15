import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';

@Module({
  imports: [PrismaModule, CategoryModule, SubCategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
