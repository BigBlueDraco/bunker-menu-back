import { Injectable } from '@nestjs/common';
import { CreateHookahInput } from '../dto/create-hookah.input';
import { UpdateHookahInput } from '../dto/update-hookah.input';

@Injectable()
export class HookahService {
  create(createHookahInput: CreateHookahInput) {
    return 'This action adds a new hookah';
  }

  findAll() {
    return `This action returns all hookah`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hookah`;
  }

  update(id: number, updateHookahInput: UpdateHookahInput) {
    return `This action updates a #${id} hookah`;
  }

  remove(id: number) {
    return `This action removes a #${id} hookah`;
  }
}
