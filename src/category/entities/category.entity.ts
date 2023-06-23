import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => Int, { description: 'Category ID field' })
  id: number;

  @Field(() => String, { description: 'Category name field' })
  name: string;
}
