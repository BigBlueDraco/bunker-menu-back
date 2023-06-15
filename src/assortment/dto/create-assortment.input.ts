import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAssortmentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
