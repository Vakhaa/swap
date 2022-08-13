import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const configService = app.get(ConfigService);
  
  //CORS
  const cors = configService.get<CorsOption>('cors');
  app.enableCors(cors);
  
  //UTILS
  app.use(helmet());
  //PORT
  const PORT = configService.get('port');
  await app.listen(PORT);
  
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();

interface CorsOption {
  origin: string,
  methods: string[],
  optionsSuccessStatus: number
}