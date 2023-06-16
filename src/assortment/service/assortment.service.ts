import { Injectable } from '@nestjs/common';
import { CreateAssortmentInput } from '../dto/create-assortment.input';
import { UpdateAssortmentInput } from '../dto/update-assortment.input';

@Injectable()
export class AssortmentService {
  create(createAssortmentInput: CreateAssortmentInput) {
    return 'This action adds a new assortment';
  }

  findAll() {
    return `This action returns all assortment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assortment`;
  }

  update(id: number, updateAssortmentInput: UpdateAssortmentInput) {
    return `This action updates a #${id} assortment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assortment`;
  }
}
