import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SubCategory {
  @Field(() => Int, { description: 'SubCategory ID field' })
  id: number;

  @Field(() => String, { description: 'Category name field' })
  name: string;

  @Field(() => Int, { description: 'Category ID field' })
  mainCategoryId: number;
}
