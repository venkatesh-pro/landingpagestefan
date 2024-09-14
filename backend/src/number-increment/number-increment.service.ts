import { Injectable } from '@nestjs/common';
import { CreateNumberIncrementDto } from './dto/create-number-increment.dto';
import { UpdateNumberIncrementDto } from './dto/update-number-increment.dto';
import { Cron, CronExpression } from '@nestjs/schedule';
import { GetRandomNumber } from './utils/function';
import { PrismaService } from 'src/prisma/prisma.service';
import { NumberIncrement } from '@prisma/client';
import { NumberIncrementGateway } from './number-increment.gateway';

@Injectable()
export class NumberIncrementService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly numberIncrementGateway: NumberIncrementGateway,
  ) {}

  private isNumberIncrementData: boolean;
  private getRandomNumber: GetRandomNumber;

  private async checkNumberIncrementData() {
    if (!this.isNumberIncrementData) {
      const data = await this.prismaService.numberIncrement.findFirst({});
      console.log('data', data);

      if (!data) {
        await this.prismaService.numberIncrement.create({
          data: {
            userPerDay: 1526,
            volumeProcessedPerHour: 1326522,
            UserWaitingPerMin: 155294,
          },
        });
      }

      this.isNumberIncrementData = true;
    }
  }

  @Cron(CronExpression.EVERY_DAY_AT_10AM)
  async incrementBetatUsersPerDay() {
    this.getRandomNumber = new GetRandomNumber();

    const random = this.getRandomNumber.getRandomNumber(1, 5);
    console.log({ random });

    this.checkNumberIncrementData();

    const numberIncrement = await this.prismaService.numberIncrement.updateMany(
      {
        data: { userPerDay: { increment: random } },
      },
    );

    this.numberIncrementGateway.handleNumberIncremented();

    return numberIncrement;
  }

  @Cron(CronExpression.EVERY_HOUR)
  async incrementVolumeProcessedPerHour() {
    this.getRandomNumber = new GetRandomNumber();

    const random = this.getRandomNumber.getRandomNumber(113, 987);
    console.log({ random });

    this.checkNumberIncrementData();

    const numberIncrement = await this.prismaService.numberIncrement.updateMany(
      {
        data: { volumeProcessedPerHour: { increment: random } },
      },
    );

    this.numberIncrementGateway.handleNumberIncremented();

    return numberIncrement;
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async incrementUserWaitingPerMin() {
    this.getRandomNumber = new GetRandomNumber();

    const random = this.getRandomNumber.getRandomNumber(5, 57);

    console.log({ random });

    this.checkNumberIncrementData();

    const numberIncrement = await this.prismaService.numberIncrement.updateMany(
      {
        data: { UserWaitingPerMin: { increment: random } },
      },
    );

    this.numberIncrementGateway.handleNumberIncremented();

    return numberIncrement;
  }

  async getNumberIncrementData() {
    return this.prismaService.numberIncrement.findFirst();
  }
}
