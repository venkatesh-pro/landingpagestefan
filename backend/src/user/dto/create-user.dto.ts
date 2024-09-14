import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail()

  // swagger
  @ApiProperty({
    default: 'test@gmail.com',
    description: 'Enter email',
  })
  email: string;
}
