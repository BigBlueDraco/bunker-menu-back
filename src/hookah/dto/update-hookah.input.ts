import { CreateHookahInput } from './create-hookah.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHookahInput extends PartialType(CreateHookahInput) {
  @Field(() => Int)
  id: number;
}
