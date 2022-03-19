import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {

 // console.log(process.env.MONGO_URI);
  const f = await mongoose.connect(process.env.MONGO_URI, {})

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
