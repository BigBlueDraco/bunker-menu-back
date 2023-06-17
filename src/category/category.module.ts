import { Module } from '@nestjs/common';
import { CategoryService } from './service/category.service';
import { CategoryResolver } from './resolver/category.resolver';
import {PrismaService} from "../prisma/service/prisma.service";

@Module({
  providers: [CategoryResolver, CategoryService, PrismaService],
})
export class CategoryModule {}
