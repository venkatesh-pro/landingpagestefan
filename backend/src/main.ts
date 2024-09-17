import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  /**
   * swagger configuration
   */

  const config = new DocumentBuilder()
    .setTitle('Authex Api')
    .setDescription('List of Api of the Authex')
    .setVersion('1.0')
    .addServer('http://localhost:5000/')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    // http://localhost:3000/api/json
    jsonDocumentUrl: 'api/json',
  });

  await app.listen(process.env.PORT);
}
bootstrap();
