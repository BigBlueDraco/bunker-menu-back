import { Injectable } from '@nestjs/common';
import { CreateSubCategoryInput } from '../dto/create-sub-category.input';
import { UpdateSubCategoryInput } from '../dto/update-sub-category.input';
import { PrismaService } from '../../prisma/service/prisma.service';

@Injectable()
export class SubCategoryService {
  constructor(private prismaService: PrismaService) {}
  create(createSubCategoryInput: CreateSubCategoryInput) {
    return this.prismaService.subCategory.create({
      data: { name: createSubCategoryInput.name, mainCategoryId: createSubCategoryInput.mainCategoryId },
    });
  }

  findAll() {
    return this.prismaService.subCategory.findMany();
  }

  findOne(id: number) {
    return this.prismaService.subCategory.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateSubCategoryInput: UpdateSubCategoryInput) {
    return this.prismaService.subCategory.update({
      data: {
        name: updateSubCategoryInput.name,
      },
      where: {
        id: updateSubCategoryInput.id,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.subCategory.delete({
      where: {
        id,
      },
    });
  }
}
