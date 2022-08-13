import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'config/configuration';

@Module({
  imports: [
    ProfileModule, 
    ConfigModule.forRoot({load: [configuration]}),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.mongo.uri'),
      }),
      inject: [ConfigService],
    })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
