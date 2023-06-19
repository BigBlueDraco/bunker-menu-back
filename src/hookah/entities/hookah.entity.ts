import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from '../../category/entities/category.entity';

@ObjectType()
export class Hookah {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
  @Field(() => Int)
  price: number;

  @Field(() => Int)
  mainCategoryId: number;
  @Field(() => Category)
  mainCategory: Category;
}
