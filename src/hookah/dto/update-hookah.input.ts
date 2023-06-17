import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';
import { CreateHookahInput } from './create-hookah.input';

@InputType()
export class UpdateHookahInput extends PartialType(CreateHookahInput) {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @Field(() => Int)
  id: number;
}
