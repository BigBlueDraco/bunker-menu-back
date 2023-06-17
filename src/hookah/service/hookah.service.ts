import { Injectable } from '@nestjs/common';
import { CreateHookahInput } from '../dto/create-hookah.input';
import { UpdateHookahInput } from '../dto/update-hookah.input';
import { PrismaService } from 'src/prisma/service/prisma.service';
import { GraphQLError } from 'graphql';

@Injectable()
export class HookahService {
  constructor(private readonly prosmaService: PrismaService) {}
  async create(createHookahInput: CreateHookahInput) {
    const { name, ...rest } = createHookahInput;
    const exsitUser = await this.prosmaService.hookah.findUnique({
      where: { name: createHookahInput.name.toLowerCase() },
    });
    if (exsitUser) {
      throw new GraphQLError(
        `Hookah with name: "${createHookahInput.name}" alredy exist`,
      );
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
