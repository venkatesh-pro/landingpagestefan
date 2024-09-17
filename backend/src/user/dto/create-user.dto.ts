import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()

  // swagger
  @ApiProperty({
    default: 'test@gmail.com',
    description: 'Enter email',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  sample: string;
}
