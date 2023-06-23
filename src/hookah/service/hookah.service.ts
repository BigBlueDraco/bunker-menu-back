import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';

import { CreateHookahInput } from '../dto/create-hookah.input';
import { UpdateHookahInput } from '../dto/update-hookah.input';
import { PrismaService } from '../../prisma/service/prisma.service';

@Injectable()
export class HookahService {
  constructor(private readonly prosmaService: PrismaService) {}
  async create(createHookahInput: CreateHookahInput) {
    const { name, ...rest } = createHookahInput;
    const exsitUser = await this.prosmaService.hookah.findUnique({
      where: { name: name.toLowerCase() },
    });
    if (exsitUser) {
      throw new GraphQLError(`Hookah with name: "${name}" alredy exist`);
    }

    return await this.prosmaService.hookah.create({
      data: { name: name.toLowerCase(), ...rest },
    });
  }

  async findAll() {
    return await this.prosmaService.hookah.findMany();
  }

  async findOne(id: number) {
    const hookah = await this.prosmaService.hookah.findUnique({
      where: { id: id },
    });
    if (!hookah) {
      throw new GraphQLError(`Hookah with ${id} dosen't exist`);
    }
    return hookah;
  }

  async update(id: number, updateHookahInput: UpdateHookahInput) {
    await this.findOne(id);
    const exsitUser = await this.prosmaService.hookah.findUnique({
      where: { name: updateHookahInput.name.toLowerCase() },
    });
    if (exsitUser) {
      throw new GraphQLError(
        `Hookah with name: "${updateHookahInput.name}" alredy exist`,
      );
    }
    return await this.prosmaService.hookah.update({
      where: { id },
      data: { ...updateHookahInput },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.prosmaService.hookah.delete({ where: { id: id } });
  }
}
