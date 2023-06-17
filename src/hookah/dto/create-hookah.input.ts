import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHookahInput {
  @Field(() => String)
  name: string;
  @Field(() => Int)
  price: number;

  @Field(() => Int)
  mainCategoryId: number;
}
