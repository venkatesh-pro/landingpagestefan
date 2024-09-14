import { Controller, Post, Body, Get } from '@nestjs/common';
import { NumberIncrementService } from './number-increment.service';
import { CreateNumberIncrementDto } from './dto/create-number-increment.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('number-increment')
@ApiTags('NumberIncrement')
export class NumberIncrementController {
  constructor(
    private readonly numberIncrementService: NumberIncrementService,
  ) {}

  @Get()
  getNumberIncrement() {
    return this.numberIncrementService.getNumberIncrementData();
  }
}
