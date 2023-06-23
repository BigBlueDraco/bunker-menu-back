import { CreateSubCategoryInput } from './create-sub-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubCategoryInput extends PartialType(
  CreateSubCategoryInput,
) {
  @Field(() => Int, {description: 'MainCategoryId field' })
  id: number;

  @Field(() => String, { description: 'SubCategory name field' })
  name: string;
}
