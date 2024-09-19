import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express'; //@nestjs/platform-express package and is used to handle file uploads through multipart/form-data requests.
import { Express } from 'express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
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

  // // need to do admin validation with auth
  // @ApiOperation({ summary: 'upload blog thumbnail' })
  // // interceptor which run before the api call and after the call
  // @UseInterceptors(FileInterceptor('thumbnail')) //to get the file we need to pass the fileInterceptor with the name of the fields
  // @Post('/uploadThumbnail')
  // uploadThumbnail(@UploadedFile() file: Express.Multer.File) {
  //   // @UploadedFile is like @Body, to get the file data in the request
  //   console.log({ test: '333' });
  //   console.log({ file });

  //   return 'ff';
  // }

  // need to do admin validation with auth
  @ApiOperation({ summary: 'upload blog thumbnail' })
  // interceptor which run before the api call and after the call
  @UseInterceptors(
    FileInterceptor('thumbnail', {
      storage: diskStorage({
        destination: 'public/blogThumbnail',
        filename: (req, file, callback) => {
          console.log();
          callback(null, `${uuidv4()}.${extname(file.originalname)}`);
        },
      }),
    }),
  ) //to get the file we need to pass the fileInterceptor with the name of the fields
  @Post('/uploadThumbnail')
  uploadThumbnail(
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    // @UploadedFile is like @Body, to get the file data in the request
    console.log({ test: '333' });
    console.log({ file });

    return { thumbnail: file.path.split('public/')[1] };
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
