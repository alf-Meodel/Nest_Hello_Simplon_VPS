import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.enableCors();
  await app.listen(9036, '0.0.0.0');
}
bootstrap();