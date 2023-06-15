import { CreateAssortmentInput } from './create-assortment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAssortmentInput extends PartialType(CreateAssortmentInput) {
  @Field(() => Int)
  id: number;
}
