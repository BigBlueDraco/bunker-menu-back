import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { AssortmentModule } from './assortment/assortment.module';
import { HookahModule } from './hookah/hookah.module';
import { ConfigModule } from '@nestjs/config/dist';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.ggl',
      sortSchema: true,
      playground: true,
    }),
    PrismaModule,
    CategoryModule,
    SubCategoryModule,
    AssortmentModule,
    HookahModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
