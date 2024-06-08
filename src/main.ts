import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);



  // Enable CORS
  const corsOptions = {
    origin: ['http://localhost:4200', 'http://localhost:3000', ],
    credentials: true,
  };

  app.enableCors(
    corsOptions,
  );

    // Enable Validation
    app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}



bootstrap();
