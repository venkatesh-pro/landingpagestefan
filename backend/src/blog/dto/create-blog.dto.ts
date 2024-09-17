import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateBlogDto {
  @ApiProperty({
    default: 'Test title',
    description: 'Enter Title',
  })
  @IsNotEmpty()
  @MinLength(10)
  title: string;

  @ApiProperty({
    default: 'Test Description sdksdksdksd',
    description: 'Enter Description',
  })
  @IsNotEmpty()
  @MinLength(16)
  description: string;

  @ApiProperty({
    default:
      'https://www.openstatus.dev/_next/image?url=%2Fassets%2Fposts%2Fdynamic-breadcrumb-nextjs%2Fbreadcrumb.png&w=3840&q=75',
    description: 'Enter Image url',
  })
  @IsNotEmpty()
  thumbnail: string;

  @ApiProperty({
    default: '<p>test</p>',
    description: 'html content from the rich text editor',
  })
  @IsNotEmpty()
  content: string;
}
