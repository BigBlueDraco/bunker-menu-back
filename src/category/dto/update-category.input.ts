import { CreateCategoryInput } from './create-category.input';
import {InputType, Field, Int, PartialType, ID} from '@nestjs/graphql';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field(() => Int)
  id: number;
}
