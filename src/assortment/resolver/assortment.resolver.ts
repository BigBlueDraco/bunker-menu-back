import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AssortmentService } from '../service/assortment.service';
import { Assortment } from '../entities/assortment.entity';
import { CreateAssortmentInput } from '../dto/create-assortment.input';
import { UpdateAssortmentInput } from '../dto/update-assortment.input';

@Resolver(() => Assortment)
export class AssortmentResolver {
  constructor(private readonly assortmentService: AssortmentService) {}

  @Mutation(() => Assortment)
  createAssortment(@Args('createAssortmentInput') createAssortmentInput: CreateAssortmentInput) {
    return this.assortmentService.create(createAssortmentInput);
  }

  @Query(() => [Assortment], { name: 'assortment' })
  findAll() {
    return this.assortmentService.findAll();
  }

  @Query(() => Assortment, { name: 'assortment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.assortmentService.findOne(id);
  }

  @Mutation(() => Assortment)
  updateAssortment(@Args('updateAssortmentInput') updateAssortmentInput: UpdateAssortmentInput) {
    return this.assortmentService.update(updateAssortmentInput.id, updateAssortmentInput);
  }

  @Mutation(() => Assortment)
  removeAssortment(@Args('id', { type: () => Int }) id: number) {
    return this.assortmentService.remove(id);
  }
}
