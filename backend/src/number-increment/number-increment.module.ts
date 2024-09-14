import { Module } from '@nestjs/common';
import { NumberIncrementService } from './number-increment.service';
import { NumberIncrementController } from './number-increment.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { NumberIncrementGateway } from './number-increment.gateway';

@Module({
  imports: [PrismaModule],
  controllers: [NumberIncrementController],
  providers: [NumberIncrementService, NumberIncrementGateway],
})
export class NumberIncrementModule {}
