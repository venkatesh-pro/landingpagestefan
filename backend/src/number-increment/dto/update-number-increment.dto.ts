import { PartialType } from '@nestjs/swagger';
import { CreateNumberIncrementDto } from './create-number-increment.dto';

export class UpdateNumberIncrementDto extends PartialType(CreateNumberIncrementDto) {}
