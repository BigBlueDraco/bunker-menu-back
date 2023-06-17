import {ObjectType, Field, Int, ID} from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => ID, { description: 'ID field' })
  id: number;

  @Field(() => Int, { description: 'Name field' })
  name: string;
}
