import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SendMailModule } from 'src/send-mail/send-mail.module';

@Module({
  imports: [PrismaModule, SendMailModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
