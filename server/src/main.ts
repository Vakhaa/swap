import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors(corsOptions);
  app.use(helmet());

  await app.listen(5000);
}
bootstrap();
