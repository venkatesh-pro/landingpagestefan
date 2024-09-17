import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import slugify from 'slugify';

@Injectable()
export class BlogService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createBlogDto: CreateBlogDto) {
    return this.prismaService.blog.create({
      data: { ...createBlogDto, slug: slugify(createBlogDto.title) },
    });
  }

  findAll() {
    return this.prismaService.blog.findMany();
  }

  findOne(slug: string) {
    return this.prismaService.blog.findUnique({
      where: {
        slug,
      },
    });
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
