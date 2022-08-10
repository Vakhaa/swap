import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProfileModule, 
    MongooseModule.forRoot('mongodb+srv://swapland:NWC2QXhkltx0epdW@cluster0.urt8qts.mongodb.net/swap?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
