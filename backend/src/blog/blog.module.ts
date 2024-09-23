import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UploadModule } from 'src/upload/upload.module';

@Module({
  controllers: [BlogController],
  providers: [BlogService],
  imports: [PrismaModule, UploadModule],
})
export class BlogModule {}
