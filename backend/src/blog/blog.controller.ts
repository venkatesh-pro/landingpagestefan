import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('blog')
@ApiTags('Blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  // need to do admin validation with auth
  @ApiOperation({ summary: 'create blog' })
  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  // for public
  @Get()
  findAll() {
    return this.blogService.findAll();
  }

  // for public
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.blogService.findOne(slug);
  }
}
