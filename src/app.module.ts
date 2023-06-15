import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { AssortmentModule } from './assortment/assortment.module';
import { HookahModule } from './hookah/hookah.module';

@Module({
  imports: [PrismaModule, CategoryModule, SubCategoryModule, AssortmentModule, HookahModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
