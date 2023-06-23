import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSubCategoryInput {
  @Field(() => String, { description: 'SubCategory name field' })
  name: string;

  @Field(() => Number, { description: 'Category Id  field' })
  mainCategoryId: number;
}
