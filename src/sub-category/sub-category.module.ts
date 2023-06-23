import { Module } from '@nestjs/common';
import { SubCategoryService } from './service/sub-category.service';
import { SubCategoryResolver } from './resolver/sub-category.resolver';
import {PrismaService} from "../prisma/service/prisma.service";

@Module({
  providers: [SubCategoryResolver, SubCategoryService, PrismaService],
})
export class SubCategoryModule {}
