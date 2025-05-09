import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));

  app.useGlobalPipes(new ValidationPipe({
    transformOptions: {
      enableImplicitConversion: true,
    }
  }))

  const configService = app.get(ConfigService); 
  app.enableCors(); 
  await app.listen(configService.get('PORT') || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
