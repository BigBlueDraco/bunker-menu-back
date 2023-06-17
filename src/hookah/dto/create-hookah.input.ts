import { InputType, Int, Field } from '@nestjs/graphql';
import {
  Length,
  IsString,
  IsInt,
  IsPositive,
  IsNotEmpty,
} from 'class-validator';
@InputType()
export class CreateHookahInput {
  @Length(2, 256)
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @Field(() => Int)
  price: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @Field(() => Int)
  mainCategoryId: number;
}
