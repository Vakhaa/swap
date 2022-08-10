import { Module } from '@nestjs/common';;
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { Profile, ProfilSchema } from '../Infrastructure/schemas/profile.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Profile.name, schema: ProfilSchema }])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
