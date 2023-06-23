import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HookahService } from '../service/hookah.service';
import { Hookah } from '../entities/hookah.entity';
import { CreateHookahInput } from '../dto/create-hookah.input';
import { UpdateHookahInput } from '../dto/update-hookah.input';

@Resolver(() => Hookah)
export class HookahResolver {
  constructor(private readonly hookahService: HookahService) {}

  @Mutation(() => Hookah)
  createHookah(
    @Args('createHookahInput') createHookahInput: CreateHookahInput,
  ) {
    return this.hookahService.create(createHookahInput);
  }

  @Query(() => [Hookah], { name: 'hookah' })
  findAll() {
    return this.hookahService.findAll();
  }

  @Query(() => Hookah, { name: 'hookah' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hookahService.findOne(id);
  }

  @Mutation(() => Hookah)
  updateHookah(
    @Args('updateHookahInput') updateHookahInput: UpdateHookahInput,
  ) {
    return this.hookahService.update(updateHookahInput.id, updateHookahInput);
  }

  @Mutation(() => Hookah)
  removeHookah(@Args('id', { type: () => Int }) id: number) {
    return this.hookahService.remove(id);
  }
}
