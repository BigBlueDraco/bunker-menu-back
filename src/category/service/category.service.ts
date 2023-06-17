import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from '../dto/create-category.input';
import { UpdateCategoryInput } from '../dto/update-category.input';
import {PrismaService} from '../../prisma/service/prisma.service'

@Injectable()
export class CategoryService {
  constructor(private  prismaService: PrismaService) {
  }
   create(createCategoryInput: CreateCategoryInput) {
    return  this.prismaService.category.create({data:{name:createCategoryInput.name}})
  }

   findAll() {
    return this.prismaService.category.findMany();
  }

  findOne(id: number) {
    return this.prismaService.category.findUnique({
      where: {
        id
      },
    })
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return this.prismaService.category.update({
      data:{
        name: updateCategoryInput.name
      },
      where:{
        id
      },
    });
  }

  remove(id: number) {
    return this.prismaService.category.delete({
      where:{
        id
      },
    });
  }
}
