import { Injectable } from '@nestjs/common';
import { CreateHookahInput } from '../dto/create-hookah.input';
import { UpdateHookahInput } from '../dto/update-hookah.input';
import { PrismaService } from 'src/prisma/service/prisma.service';

@Injectable()
export class HookahService {
  constructor(private readonly prosmaService: PrismaService) {}
  create(createHookahInput: CreateHookahInput) {
    return this.prosmaService.hookah.create({ data: { ...createHookahInput } });
  }

  findAll() {
    return this.prosmaService.hookah.findMany();
  }

  findOne(id: number) {
    return this.prosmaService.hookah.findUniqueOrThrow({ where: { id: id } });
  }

  update(id: number, updateHookahInput: UpdateHookahInput) {
    return this.prosmaService.hookah.update({
      where: { id },
      data: { ...updateHookahInput },
    });
  }

  remove(id: number) {
    return this.prosmaService.hookah.delete({ where: { id: id } });
  }
}
