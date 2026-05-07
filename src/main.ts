import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.urlencoded({ extended: true })); // 👈 REQUIRED for HTML forms
  app.use(bodyParser.json());

  await app.listen(3067);
}
bootstrap();