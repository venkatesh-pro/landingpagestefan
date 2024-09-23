import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SendMailService } from 'src/send-mail/send-mail.service';
import { validate } from 'deep-email-validator';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly sendMailService: SendMailService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    console.log('createUserDto.email', createUserDto.email);
    const validationResult = await validate(createUserDto.email);
    const createdUser = await this.prismaService.user.create({
      data: {
        ...createUserDto,
        isValidEmail: validationResult.valid,
        locationData: {
          ip: 'userIp',
          city: 'geo?.city',
          country: 'geo?.country',
          region: 'geo?.region',
          ll: 'geo?.ll',
        },
      },
    });

    if (createdUser.id && validationResult.valid) {
      return this.sendMailService.sendMailAfterUserCreated(createdUser.email);
    }
  }

  findAll(isValidEmail) {
    console.log({ isValidEmail });
    if (!isValidEmail) {
      return this.prismaService.user.findMany({});
    } else {
      return this.prismaService.user.findMany({
        where: {
          isValidEmail,
        },
      });
    }
  }
}
