import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SendMailService } from 'src/send-mail/send-mail.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly sendMailService: SendMailService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const createdUser = await this.prismaService.user.create({
      data: {
        ...createUserDto,
        locationData: {
          ip: 'userIp',
          city: 'geo?.city',
          country: 'geo?.country',
          region: 'geo?.region',
          ll: 'geo?.ll',
        },
      },
    });

    if (createdUser.id) {
      return this.sendMailService.sendMailAfterUserCreated(createdUser.email);
    }
  }
}
